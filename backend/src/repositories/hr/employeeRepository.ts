import { BaseRepository } from '../baseRepository';
import { Employee, IEmployee } from '../../models/hr/Employee';

export class EmployeeRepository extends BaseRepository<IEmployee> {
  constructor() {
    super(Employee);
  }
}

export const employeeRepository = new EmployeeRepository();
export default employeeRepository;
