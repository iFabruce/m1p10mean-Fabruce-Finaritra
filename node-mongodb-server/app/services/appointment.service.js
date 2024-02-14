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

exports.create = async(date, hour) => {
  try {
    const dateSplit = date.split('-')
    const hourSplit = hour.split(':')
    var startingDate = new Date(dateSplit[0]-1,dateSplit[1],dateSplit[2],hourSplit[0],hourSplit[1])
    console.log(`startingDate: ${startingDate}`)
    var endingDate = startingDate
    endingDate.setHours(startingDate.getHours()+2)
    console.log(`endingDate: ${endingDate}`)
    // console.log(`startingDate:${startingDate} | endingDate:${endingDate}`)
    // const client = clientService.findById({id: clientId})
    // const employee = employeeService.findById({id: employeeId}) 
    // const service = serviceService.findById({id: serviceId}) 

    // const newAppointmentWithClient = new AppointmentWithClient({
    //   startingDate,
    //   endingDate,
    //   client,
    //   service,
    //   employee,
    //   status: 'actif'
    // })
  
    // const savedAppointment = await newAppointmentWithClient.save();
    // console.log('Rendez-vous ajouté avec succès:', savedAppointment);
    // return savedAppointment;

  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}

