const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    empName:{
        type:String,
        required:true
    },
    empSalary:{
        type:String,
        required:true
    },
    empRole:{
        type:String,
        required:true
    },
    empDepartment:{
        type:String,
        required:true
    },
    empShift:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
});

const Employee = mongoose.model("employee",employeeSchema);
module.exports = Employee;
