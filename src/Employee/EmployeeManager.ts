import Employee from "./EmployeeClass";
class EmployeeManager {
  employees: Employee[];

  constructor() {
    this.employees = [];
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  editEmployee(id: number, updatedEmployee: Employee) {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.employees[index] = { ...this.employees[index], ...updatedEmployee };
      return true;
    }
    return false;
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }

  listEmployees() {
    return this.employees;
  }
}

export default EmployeeManager;
