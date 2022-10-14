const Employee = require("../models/employeeModel");



const createEmployee = (async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(200).send(employee);
    } catch (error) {
        console.log(error);
    }
});

const getEmployee = (async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).send(employee);
    } catch (error) {
        console.log(error);
    }
});

const getEmployeeById = (async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).send(employee);
    } catch (error) {
        console.log(error);
    }
});

const updateEmployeeById = (async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(employee);
    } catch (error) {
        console.log(error);
    }
});

const deleteEmployeeById = (async(req,res)=>{
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, {isDeleted:true} );
        res.status(200).send("Deleted Successfully");
    } catch (error) {
        console.log(error);
    }
});

module.exports = {
    createEmployee,
    getEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById
}
