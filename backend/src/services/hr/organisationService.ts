import mongoose from 'mongoose';

interface Department {
  _id?: string;
  name: string;
  parentId?: string;
  managerId?: string;
  tenantId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface Designation {
  _id?: string;
  title: string;
  departmentId: string;
  tenantId: string;
}

// In-memory store (replace with DB models if you add Department/Designation models)
// These are intentionally simple — add proper Mongoose models if needed.
const departments: Department[] = [];
const designations: Designation[] = [];

export class OrganisationService {
  // ─── Departments ────────────────────────────────────────────────────────────

  static async getDepartments(tenantId: string): Promise<Department[]> {
    return departments.filter((d) => d.tenantId === tenantId);
  }

  static async getDepartmentById(id: string, tenantId: string): Promise<Department | undefined> {
    return departments.find((d) => d._id === id && d.tenantId === tenantId);
  }

  static async createDepartment(data: Omit<Department, '_id' | 'createdAt' | 'updatedAt'>): Promise<Department> {
    const dept: Department = {
      ...data,
      _id: new mongoose.Types.ObjectId().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    departments.push(dept);
    return dept;
  }

  static async updateDepartment(id: string, tenantId: string, data: Partial<Department>): Promise<Department | null> {
    const index = departments.findIndex((d) => d._id === id && d.tenantId === tenantId);
    if (index === -1) return null;
    departments[index] = { ...departments[index], ...data, updatedAt: new Date() };
    return departments[index];
  }

  static async deleteDepartment(id: string, tenantId: string): Promise<boolean> {
    const index = departments.findIndex((d) => d._id === id && d.tenantId === tenantId);
    if (index === -1) return false;
    departments.splice(index, 1);
    return true;
  }

  // ─── Designations ────────────────────────────────────────────────────────────

  static async getDesignations(tenantId: string): Promise<Designation[]> {
    return designations.filter((d) => d.tenantId === tenantId);
  }

  static async createDesignation(data: Omit<Designation, '_id'>): Promise<Designation> {
    const designation: Designation = {
      ...data,
      _id: new mongoose.Types.ObjectId().toString(),
    };
    designations.push(designation);
    return designation;
  }

  static async deleteDesignation(id: string, tenantId: string): Promise<boolean> {
    const index = designations.findIndex((d) => d._id === id && d.tenantId === tenantId);
    if (index === -1) return false;
    designations.splice(index, 1);
    return true;
  }

  // ─── Org Chart ────────────────────────────────────────────────────────────

  static async getOrgChart(tenantId: string) {
    const depts = await this.getDepartments(tenantId);
    // Build tree structure
    const map: Record<string, any> = {};
    const roots: any[] = [];

    depts.forEach((d) => {
      map[d._id!] = { ...d, children: [] };
    });

    depts.forEach((d) => {
      if (d.parentId && map[d.parentId]) {
        map[d.parentId].children.push(map[d._id!]);
      } else {
        roots.push(map[d._id!]);
      }
    });

    return roots;
  }
}

export default OrganisationService;
