var mongoose = require("mongoose");

var employeeSchema = mongoose.Schema({
  employee_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  dob: {
    type: String,
  },
  salary: {
    type: String,
  },
  joining_date: {
    type: String,
  },
  status: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
