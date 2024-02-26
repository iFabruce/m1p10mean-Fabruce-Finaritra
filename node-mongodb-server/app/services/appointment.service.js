// client.service.js
const mongoose = require("mongoose");
const Appointment = require("../models/appointment.model");
const clientService = require("../services/client.service");
const employeeService = require("../services/employee.service");
const serviceService = require("../services/service.service");

exports.getClientAppointment = async (clientId) => {
  return Appointment.find({ "client._id": clientId})  
}

function convertDate(date) {
  const dateSplit = date.split("-");
  return new Date(dateSplit[0] - 1, dateSplit[1], dateSplit[2]);
}

exports.employeeAppointment = async (employeeId, date) => {
  const dateSplit = date.split("-")
  const startingDate = new Date(
    dateSplit[0],
    dateSplit[1] - 1,
    dateSplit[2],
    "08" //heure d'ouverture
  );
  const endDate = new Date(
    dateSplit[0],
    dateSplit[1] - 1,
    dateSplit[2],
    "16" //heure de fermeture
  );

  return await Appointment.find({
    $and: [
      { "employee._id": employeeId },
      { startingDate: { $gte: startingDate, $lte: endDate } },
    ],
  });
};

exports.getAppointmentsByClientAndDateRange = async (clientId, startDate, endDate) => {
  if (!startDate || startDate.toISOString() === '1970-01-01T00:00:00.000Z' ||
      !endDate || endDate.toISOString() === '1970-01-01T00:00:00.000Z') {
    console.log("tsy mety");
    return await Appointment.find({
      'client._id': clientId
    });
  } else {
    console.log(startDate,endDate)
    console.log("mety");
    return await Appointment.find({
      'client._id': clientId,
      createdAt: { $gte: startDate, $lte: endDate },
    });
  }
}

exports.findAll = () => {
  return Appointment.find();
};

exports.findOne = (username) => {
  return Appointment.findOne({ username });
};

exports.create = async (date, hour, clientId, employeeId, serviceId) => {
  try {
    const offset = new Date().getTimezoneOffset();
    const dateSplit = date.split("-");
    const hourSplit = hour.split(":");
    // const hh = (Number(hourSplit[0]) + offset/60).toString()
    var startingDate = new Date(
      dateSplit[0],
      dateSplit[1] - 1,
      dateSplit[2],
      (Number(hourSplit[0])+3).toString(), //UTC+3
      hourSplit[1]
    );
    console.log(dateSplit[2])

    const service = await serviceService.findOne(serviceId);

    var endingDate = new Date(startingDate);
    endingDate.setHours(startingDate.getHours() + service.duration);

    const client = await clientService.findOne(clientId);
    const employee = await employeeService.findOne(employeeId);

    const overlappingAppointments = await Appointment.find({
      $and: [
        { "Employee.id": employeeId },
        {
          $or: [
            {
              startingDate: { $lt: startingDate },
              endingDate: { $gt: startingDate },
            }, // Nouvel appointment commence après l'existante
            {
              startingDate: { $lt: endingDate },
              endingDate: { $gt: endingDate },
            }, // Nouvel appointment se termine avant l'existante
            {
              startingDate: { $gte: startingDate },
              endingDate: { $lte: endingDate },
            }, // Nouvel appointment se chevauche complètement avec l'existante
          ],
        },
      ],
    });

    if (overlappingAppointments.length > 0) {
      return "overlapping";
    } else {
      const payment = await clientService.payment(clientId, service.price)
      if(payment){
        const newAppointmentWithClient = new Appointment({
          startingDate,
          endingDate,
          client,
          service,
          employee,
          status: "actif",
        });
        newAppointmentWithClient.save();
        console.log("Rendez-vous ajouté avec succès:", newAppointmentWithClient);
        return "success"
      }
      else{
        console.log("Solde insuffisant");
        return "cash"
      }
    }
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

exports.updateStatus = async (appointment,statusFilter) => {
  try {
    console.log(appointment)
      const updatedAppointment = await Appointment.findOneAndUpdate(
        { "_id": appointment.id },
        { $set: { status: statusFilter } },
        { new: true }
      );
      console.log("App: ",updatedAppointment)
      return updatedAppointment;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du status: ${error.message}`);
  }
};

exports.findStatus = (statusFilter) => {
  const today = new Date().toISOString().split('T')[0];
  const todayStart = new Date(today).toISOString();
  const todayEnd = new Date().toISOString();
  if(statusFilter.status==="actif"){
    console.log("actif",statusFilter)
    return Appointment.find({
      status:"actif",
      startingDate:{
          $gte: todayStart,
          $lt: todayEnd
      }
    });
  }else{
    console.log(statusFilter)
    return Appointment.find({status:"inactif"});
  }
};