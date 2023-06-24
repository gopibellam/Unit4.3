const BaseController = require("./baseController");
const EmployeeModel = require("../models/employeeModel");
class Employee extends BaseController {
  constructor() {
    super(Employee, EmployeeModel);
  }
}
module.exports = new Employee();
