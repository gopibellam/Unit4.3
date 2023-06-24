var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const employeeController = require("../controllers/employeeController");

router.post("/add-employee", async (req, res) => {
  data = req.body;
  data.employee_id = uuidv4();
  employeeController.create(data, (err, employeeResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: employeeResponse,
    });
  });
});

router.post("/update-employee", (req, res) => {
  let data = req.body;
  employeeController.findOneAndUpdate(
    { employee_id: req.body.employee_id },
    data,
    (err, updatedEmployee) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedEmployee,
      });
    }
  );
});

router.get("/find-employee/:id", (req, res) => {
  employeeController.find(
    { employee_id: req.params.id },
    (err, employeeDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: employeeDetails,
      });
    }
  );
});

router.post("/delete-employee", (req, res) => {
  employeeController.findOneAndRemove(
    { employee_id: req.body.employee_id },
    (err, deletedEmployee) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedEmployee,
      });
    }
  );
});

router.get("/find-all-employees", (req, res) => {
  employeeController.find({}, (err, allEmployeeDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allEmployeeDetails,
    });
  });
});

module.exports = router;
