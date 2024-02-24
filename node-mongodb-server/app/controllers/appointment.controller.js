const appointmentService = require('../services/appointment.service');

exports.getClientAppointment= async(req, res) =>{
  try {
    const appointments = await appointmentService.getClientAppointment(req.params.clientId);
    res.json(appointments);
    console.log(appointments)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

exports.getAppointmentsByClientAndDateRange= async(req, res) =>{
  const { clientId, startDate, endDate } = req.body;

  try {
    const appointments = await appointmentService.getAppointmentsByClientAndDateRange(
      clientId,
      new Date(startDate),
      new Date(endDate)
    );

    res.json(appointments);
    console.log(appointments)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
}

exports.employeeAppointment = (req, res) => {
  const {employeeId, date} = req.params
  appointmentService.employeeAppointment(employeeId, date)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
}
exports.findAll = (req, res) => {
    appointmentService.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
};
exports.findOne = (req, res) => {
    appointmentService.findOne(req.params.username)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
};

exports.create = (req, res) => {
  const {date, hour, clientId, employeeId, serviceId} = req.body
  console.log("date:",date)
  appointmentService.create(date, hour, clientId, employeeId, serviceId).then(
    data => {
      res.json(data)
    }
  )
  .catch(err => {
    res.status(500).send({ message: err.message || "Erreur" });
  });
}

