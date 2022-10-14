const { Router } = require("express");
const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.
route("/")
.post(employeeController.createEmployee)
.get(employeeController.getEmployee)

router.
route("/:id")
.get(employeeController.getEmployeeById)
.put(employeeController.updateEmployeeById)
.delete(employeeController.deleteEmployeeById)

module.exports = router;