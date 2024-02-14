// client.Employee.js
const Employee = require('../models/employee.model');

exports.findAll = () => {
  return Employee.find();
};

exports.findByUsername = (username) => {
  return Employee.findOne({username});
};

exports.findOne = (id) => {
  return Employee.findById(id);
};

//Create
exports.create = (EmployeeData) => {
  try {
    const newEmployee = new Employee(EmployeeData);
    return newEmployee.save();
  } catch (error) {
    throw error;
  }
}
// Update
exports.update = (EmployeeId, updatedEmployeeData) => {
  try {
    return Employee.findByIdAndUpdate(EmployeeId, updatedEmployeeData, { new: true });
  } catch (error) {
    throw error;
  }
}

// Delete
exports.delete = (EmployeeId) => {
  try {
    return Employee.findByIdAndDelete(EmployeeId);
  } catch (error) {
    throw error;
  }
}