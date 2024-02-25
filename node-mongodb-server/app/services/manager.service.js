// client.service.js
const Manager = require('../models/manager.model');
const Appointment = require('../models/appointment.model');


exports.getDailyAppointmentNumber = () => {
  return Appointment.aggregate([
    {
      $group: {
        _id: { $dayOfWeek: "$startingDate" },
        total: {$sum: 1}
      }, 
    },
    {
      $project: {
        dayOfWeek: "$_id",
        total: "$total"
      }
    }
  ]);
}
exports.getMonthlyAppointmentNumber = () => {
  return Appointment.aggregate([
    {
      $group: {
        _id: { $month: "$startingDate" },
        total: {$sum: 1}
      }, 
    },
    {
      $project: {
        month: "$_id",
        total: "$total"
      }
    }
  ]);
}

//Temps moyen de travail
exports.workingTime = () => {
  return Appointment.aggregate([
    {
      $group: {
        _id: "$employee.fullname",
        averageWorkTime: {
          $avg: "$service.duration"
        }
      }
    },
    {
      $project: {
        employee: "$_id",
        averageWorkTime: "$averageWorkTime"
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

