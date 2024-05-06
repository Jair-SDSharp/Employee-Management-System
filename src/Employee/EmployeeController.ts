import Employee from "./EmployeeClass";
import EmployeeManager from "./EmployeeManager";
import { Request, Response } from "express";

class EmployeeController {
  employeeManager: EmployeeManager;
  constructor(employeeManager: EmployeeManager) {
    this.employeeManager = employeeManager;
  }

  addEmployee(req: Request, res: Response) {
    const { id, name, lastName, post, department, salary } = req.body;
    const employee = new Employee(id, name, lastName, post, department, salary);
    this.employeeManager.addEmployee(employee);
    res.status(201).send("Employee added successfully");
  }

  editEmployee(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const updatedEmployee = req.body;
    const success = this.employeeManager.editEmployee(id, updatedEmployee);
    if (success) {
      res.status(200).send("Successful update");
    } else {
      res.status(404).send("Employee not found");
    }
  }

  deleteEmployee(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    this.employeeManager.deleteEmployee(id);
    res.status(200).send("Successful delete");
  }

  listEmployees(res: Response) {
    const employees = this.employeeManager.listEmployees();
    res.status(200).json(employees);
  }
}
export default EmployeeController;
