// client.service.js
const Employee = require('../models/employee.model');

exports.findAll = () => {
  return Employee.find();
};

exports.findOne = (username) => {
  // var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  return Employee.findOne({username});
};
