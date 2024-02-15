// client.service.js
const Appointment = require('../models/appointment.model');
const clientService = require('../services/client.service');
const employeeService = require('../services/employee.service');
const serviceService = require('../services/service.service');




exports.findAll = () => {
  return Appointment.find();
};

exports.findOne = (username) => {
  // var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  return Appointment.findOne({username});
};

exports.create = async(date, hour, clientId, employeeId, serviceId) => {
  try {
    const dateSplit = date.split('-')
    const hourSplit = hour.split(':')
    var startingDate = new Date(dateSplit[0]-1,dateSplit[1],dateSplit[2],hourSplit[0],hourSplit[1])
    
    var endingDate = new Date(startingDate)
    endingDate.setHours(startingDate.getHours()+2)
    
    const client = await clientService.findOne(clientId)
    const employee = await employeeService.findOne(employeeId) 
    const service = await serviceService.findOne(serviceId) 

    const overlappingAppointments = await Appointment.find({
      $or: [
        {
          $and: [
            { startingDate: { $lt: startingDate } },  // Nouvel appointment commence après l'existante
            { endingDate: { $gt: startingDate } } // Nouvel appointment se termine avant l'existante
          ]
        },
        {
          $and: [
            { startingDate: { $lt: endingDate } }, // Nouvel appointment commence après l'existante
            { endingDate: { $gt: endingDate } } // Nouvel appointment se termine avant l'existante
          ]
        },
        {
          $and: [
            { startingDate: { $gte: startingDate } }, // Nouvel appointment commence avant l'existante
            { endingDate: { $lte: endingDate } } // Nouvel appointment se termine après l'existante
          ]
        }
      ]
    });
    
    if (overlappingAppointments.length > 0) {
      return 'Le nouveau rendez se chevauche avec un rendez-vous existant.'
    } else {
      const newAppointmentWithClient = new Appointment({
        startingDate,
        endingDate,
        client,
        service,
        employee,
        status: 'actif'
      })
      newAppointmentWithClient.save();
      console.log('Rendez-vous ajouté avec succès:', newAppointmentWithClient);
      return newAppointmentWithClient
    }

    
  
    // return savedAppointment;

  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}

