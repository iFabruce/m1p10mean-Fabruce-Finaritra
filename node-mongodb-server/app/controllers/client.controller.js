const clientService = require('../services/client.service');

exports.findAll = (req, res) => {
    clientService.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
};
exports.findOne = (req, res) => {
    clientService.findOne(req.params.username)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
};