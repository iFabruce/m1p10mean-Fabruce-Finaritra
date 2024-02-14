const appointmentService = require('../services/appointment.service');

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
  const {date, hour} = req.body
  console.log("date:",date)
  appointmentService.create(date, hour).then(
    data => {
      res.send(data)
    }
  )
  .catch(err => {
    res.status(500).send({ message: err.message || "Erreur" });
  });
}

