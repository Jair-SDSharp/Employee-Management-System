import EmployeeManager from "./Employee/EmployeeManager";
import EmployeeController from "./Employee/EmployeeController";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const employeeManager = new EmployeeManager();
const employeeController = new EmployeeController(employeeManager);

// Routes
app.post("/employees", (req, res) => employeeController.addEmployee(req, res));
app.put("/employees/:id", (req, res) =>
  employeeController.editEmployee(req, res)
);
app.delete("/employees/:id", (req, res) =>
  employeeController.deleteEmployee(req, res)
);
app.get("/employees", (req, res) => employeeController.listEmployees(res));

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
