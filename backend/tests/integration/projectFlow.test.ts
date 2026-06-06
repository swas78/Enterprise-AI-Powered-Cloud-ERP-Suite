import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../src/index';
import { Tenant } from '../../src/models/Tenant';
import { User } from '../../src/models/User';
import { Project } from '../../src/models/project/Project';
import { Task } from '../../src/models/project/Task';
import { Employee } from '../../src/models/hr/Employee';
import { redisClient } from '../../src/config/redis';

describe('🚀 Amdox ERP Project Management Integration Flow Test', () => {
  let token: string;
  let tenantId: string;
  let projectId: string;
  let empId1: string;
  let empId2: string;
  
  let taskIdA: string;
  let taskIdB: string;
  let taskIdC: string;

  beforeAll(async () => {
    // Wait for database connection to be established
    if (mongoose.connection.readyState !== 1) {
      await new Promise((resolve) => mongoose.connection.once('open', resolve));
    }

    // 1. Reset Database Collections for projects, tasks, employees
    await Tenant.deleteMany({});
    await User.deleteMany({});
    await Project.deleteMany({});
    await Task.deleteMany({});
    await Employee.deleteMany({});

    // 2. Initialize active Tenant
    const tenant = await Tenant.create({
      name: 'Project Test Corp',
      subdomain: 'projectcorp',
    });
    tenantId = tenant._id.toString();

    // 3. Create TenantAdmin User & authenticate to get JWT token
    await User.create({
      name: 'Project Admin',
      email: 'project.admin@amdox.com',
      password: 'projectadminpassword',
      role: 'TenantAdmin',
      tenantId,
    });

    const loginRes = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'project.admin@amdox.com', password: 'projectadminpassword' });

    token = loginRes.body.data.accessToken;

    // 4. Create dummy Employees for resource allocation heatmap testing
    const emp1 = await Employee.create({
      tenantId,
      name: 'Alice Developer',
      email: 'alice@amdox.com',
      department: 'Engineering',
      role: 'Software Engineer',
      salary: 85000,
    });
    empId1 = emp1._id.toString();

    const emp2 = await Employee.create({
      tenantId,
      name: 'Bob Designer',
      email: 'bob@amdox.com',
      department: 'Design',
      role: 'UX Designer',
      salary: 75000,
    });
    empId2 = emp2._id.toString();
  });

  afterAll(async () => {
    // Gracefully close connections
    await mongoose.connection.close();
    await redisClient.quit();
  });

  it('Step 1: Should register a new Project', async () => {
    const res = await request(app)
      .post('/api/v1/projects')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        name: 'Amdox Core ERP V2',
        description: 'Building version 2 of the AI ERP',
        budget: 150000, // $150,000 budget
        startDate: new Date(),
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.name).toBe('Amdox Core ERP V2');
    expect(res.body.data.budget).toBe(150000);
    projectId = res.body.data._id;
  });

  it('Step 2: Should retrieve list of active Projects', async () => {
    const res = await request(app)
      .get('/api/v1/projects')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.length).toBe(1);
    expect(res.body.data[0].name).toBe('Amdox Core ERP V2');
  });

  it('Step 3: Should create multiple Tasks for the Project', async () => {
    // Task A
    const resA = await request(app)
      .post('/api/v1/projects/tasks')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        projectId,
        name: 'Design Database Schemas',
        assignedTo: empId1, // Alice
        status: 'In Progress',
      });
    expect(resA.statusCode).toBe(201);
    taskIdA = resA.body.data._id;

    // Task B
    const resB = await request(app)
      .post('/api/v1/projects/tasks')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        projectId,
        name: 'Implement REST Endpoints',
        assignedTo: empId1, // Alice
        status: 'To Do',
      });
    expect(resB.statusCode).toBe(201);
    taskIdB = resB.body.data._id;

    // Task C
    const resC = await request(app)
      .post('/api/v1/projects/tasks')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        projectId,
        name: 'Run Load Tests & Validate',
        assignedTo: empId2, // Bob
        status: 'To Do',
      });
    expect(resC.statusCode).toBe(201);
    taskIdC = resC.body.data._id;
  });

  it('Step 4: Should update dependencies successfully (valid DAG)', async () => {
    // Task B depends on Task A
    const res1 = await request(app)
      .post(`/api/v1/projects/tasks/${taskIdB}/dependencies`)
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        dependencies: [taskIdA],
      });
    expect(res1.statusCode).toBe(200);
    expect(res1.body.status).toBe('success');
    expect(res1.body.data.dependencies).toContain(taskIdA);

    // Task C depends on Task B
    const res2 = await request(app)
      .post(`/api/v1/projects/tasks/${taskIdC}/dependencies`)
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        dependencies: [taskIdB],
      });
    expect(res2.statusCode).toBe(200);
    expect(res2.body.status).toBe('success');
    expect(res2.body.data.dependencies).toContain(taskIdB);
  });

  it('Step 5: Should reject cyclical dependencies (DAG validation mismatch)', async () => {
    // Try to make Task A depend on Task C (A -> C -> B -> A => Cycle!)
    const res = await request(app)
      .post(`/api/v1/projects/tasks/${taskIdA}/dependencies`)
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        dependencies: [taskIdC],
      });

    expect(res.statusCode).toBe(500);
    expect(res.body.status).toBe('error');
    expect(res.body.message).toContain('DAG Validation Mismatch: Cyclical dependency detected');
  });

  it('Step 6: Should compile resource heatmap showing optimal allocation', async () => {
    // Current allocation: Alice (empId1) has 2 active tasks (Task A, Task B), Bob (empId2) has 1 (Task C)
    const res = await request(app)
      .get('/api/v1/projects/heatmap')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    
    const aliceData = res.body.data.find((d: any) => d.employeeId === empId1);
    const bobData = res.body.data.find((d: any) => d.employeeId === empId2);

    expect(aliceData).toBeDefined();
    expect(aliceData.taskCount).toBe(2);
    expect(aliceData.status).toBe('Optimal');

    expect(bobData).toBeDefined();
    expect(bobData.taskCount).toBe(1);
    expect(bobData.status).toBe('Optimal');
  });

  it('Step 7: Should detect over-allocated resource in heatmap', async () => {
    // Assign one more active task to Alice to make taskCount = 3 (Over-allocated)
    const resTask = await request(app)
      .post('/api/v1/projects/tasks')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        projectId,
        name: 'Alice Third Active Task',
        assignedTo: empId1, // Alice
        status: 'In Progress',
      });
    expect(resTask.statusCode).toBe(201);

    // Refresh heatmap
    const resHeatmap = await request(app)
      .get('/api/v1/projects/heatmap')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId);

    const aliceData = resHeatmap.body.data.find((d: any) => d.employeeId === empId1);
    expect(aliceData.taskCount).toBe(3);
    expect(aliceData.status).toBe('Overallocated'); // Flagged overallocated!
  });

  it('Step 8: Should return budget variance without alarm if under budget', async () => {
    const res = await request(app)
      .get(`/api/v1/projects/${projectId}/variance`)
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.spent).toBe(0);
    expect(res.body.data.variance).toBe(150000);
    expect(res.body.data.usagePercentage).toBe(0);
    expect(res.body.data.alarmActive).toBe(false);
  });

  it('Step 9: Should trigger alarm and show over-budget variance when spent exceeds 110% of budget', async () => {
    // Artificially modify project spent to $170,000 (budget is $150,000, 110% is $165,000)
    await Project.findByIdAndUpdate(projectId, { $set: { spent: 170000 } });

    const res = await request(app)
      .get(`/api/v1/projects/${projectId}/variance`)
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.spent).toBe(170000);
    expect(res.body.data.variance).toBe(-20000);
    expect(res.body.data.usagePercentage).toBe(113.33); // (170/150)*100
    expect(res.body.data.alarmActive).toBe(true); // Overrun alarm triggered!
  });
});
