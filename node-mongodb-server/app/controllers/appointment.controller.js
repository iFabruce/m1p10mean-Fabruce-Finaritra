const appointmentService = require('../services/appointment.service');

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
      res.send(data)
    }
  )
  .catch(err => {
    res.status(500).send({ message: err.message || "Erreur" });
  });
}

