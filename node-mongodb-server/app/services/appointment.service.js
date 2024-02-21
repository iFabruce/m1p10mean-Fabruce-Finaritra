// client.service.js
const Appointment = require('../models/appointment.model');
const clientService = require('../services/client.service');
const employeeService = require('../services/employee.service');
const serviceService = require('../services/service.service');


function convertDate(date){
  const dateSplit = date.split('-')
  return new Date(dateSplit[0]-1,dateSplit[1],dateSplit[2])

}
exports.employeeAppointment = async(employeeId, date) => {
  const dateSplit = date.split('-')
  
  const startingDate= new Date(dateSplit[0]-1,dateSplit[1]-1,dateSplit[2], '08')
  const endDate= new Date(dateSplit[0]-1,dateSplit[1]-1,dateSplit[2], '16')

  return await Appointment.find({ 
    $and:[
      {'employee._id': employeeId},
      {startingDate: { $gte: startingDate, $lte: endDate}}
    ]
  })
} 


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
    var startingDate = new Date(dateSplit[0]-1,dateSplit[1]-1,dateSplit[2],hourSplit[0],hourSplit[1])
    
    
    const client = await clientService.findOne(clientId)
    const employee = await employeeService.findOne(employeeId) 
    const service = await serviceService.findOne(serviceId) 
    
    var endingDate = new Date(startingDate)
    endingDate.setHours(startingDate.getHours()+service.duration)

    const overlappingAppointments = await Appointment.find({
      $and: [
        { 'Employee.id': employeeId },
        {
          $or: [
            { startingDate: { $lt: startingDate }, endingDate: { $gt: startingDate } }, // Nouvel appointment commence après l'existante
            { startingDate: { $lt: endingDate }, endingDate: { $gt: endingDate } }, // Nouvel appointment se termine avant l'existante
            { startingDate: { $gte: startingDate }, endingDate: { $lte: endingDate } } // Nouvel appointment se chevauche complètement avec l'existante
          ]
        }
      ]
    });
    
    
    if (overlappingAppointments.length > 0) {
      return 'overlapping'
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
      
      //Paiement
      const result = await clientService.payment(client.id, service.price)
        if(result){
          // console.log('Rendez-vous ajouté avec succès:');
          return 'success'
        }else{
          return 'cash'
        }
    }

  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}

