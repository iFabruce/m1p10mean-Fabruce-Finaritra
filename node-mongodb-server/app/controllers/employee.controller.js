const employeeService = require('../services/employee.service');

exports.findAll = (req, res) => {
    employeeService.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
};
exports.findOne = (req, res) => {
    employeeService.findOne(req.params.username)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
};