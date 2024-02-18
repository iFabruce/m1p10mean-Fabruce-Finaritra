// client.service.js
const Manager = require('../models/manager.model');
const Appointment = require('../models/appointment.model');

const db = require("../models");

exports.workingTime = () => {
  return Appointment.aggregate([
    // {
    //   $match: {
    //     "employee.id": { $exists: true }
    //   }
    // },
    {
      $group: {
        _id: "$employee._id",
        totalWorkTime: {
          $sum: "$service.duration"
        }
      }
    },
    {
      $project: {
        employeeId: "$_id",
        totalWorkTime: "$totalWorkTime"
      }
    }
  ]);
  
} 
exports.findAll = () => {
  return Manager.find();
};

exports.findByUsername = (username) => {
  return Manager.findOne({username});
};

