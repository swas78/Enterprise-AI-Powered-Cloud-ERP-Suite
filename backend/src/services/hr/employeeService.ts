import { employeeRepository } from '../../repositories/hr/employeeRepository';
import { IEmployee } from '../../models/hr/Employee';
import { CreateEmployeeDTO, UpdateEmployeeDTO, EmployeeStatus } from '../../types/hr';

export class EmployeeService {
  static async getAllEmployees(tenantId: string, filters: any = {}): Promise<IEmployee[]> {
    return employeeRepository.find({ tenantId, ...filters });
  }

  static async getEmployeeById(id: string, tenantId: string): Promise<IEmployee | null> {
    return employeeRepository.findOne({ _id: id, tenantId });
  }

  static async getEmployeeByEmail(email: string, tenantId: string): Promise<IEmployee | null> {
    return employeeRepository.findOne({ email, tenantId });
  }

  static async createEmployee(dto: CreateEmployeeDTO): Promise<IEmployee> {
    const existing = await employeeRepository.findOne({ email: dto.email, tenantId: dto.tenantId });
    if (existing) throw new Error('An employee with this email already exists.');
    return employeeRepository.create(dto);
  }

  static async updateEmployee(id: string, tenantId: string, dto: UpdateEmployeeDTO): Promise<IEmployee | null> {
    return employeeRepository.update({ _id: id, tenantId }, { $set: dto });
  }

  static async terminateEmployee(id: string, tenantId: string): Promise<IEmployee | null> {
    return employeeRepository.update(
      { _id: id, tenantId },
      { $set: { status: 'terminated' as EmployeeStatus } }
    );
  }

  static async getEmployeesByDepartment(departmentId: string, tenantId: string): Promise<IEmployee[]> {
    return employeeRepository.find({ departmentId, tenantId });
  }

  static async getDirectReports(managerId: string, tenantId: string): Promise<IEmployee[]> {
    return employeeRepository.find({ managerId, tenantId });
  }

  static async countEmployees(tenantId: string): Promise<number> {
    return employeeRepository.countDocuments({ tenantId });
  }

  static async searchEmployees(tenantId: string, query: string): Promise<IEmployee[]> {
    return employeeRepository.find({
      tenantId,
      $or: [
        { firstName: { $regex: query, $options: 'i' } },
        { lastName: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
      ],
    });
  }
}

export default EmployeeService;
