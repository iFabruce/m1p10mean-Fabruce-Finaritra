const clientService = require('../services/client.service');
const mongoose = require('mongoose');

exports.findAll = (req, res) => {
    clientService.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
};
exports.findByUsername = (req, res) => {
    clientService.findByUsername(req.params.username)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
};
exports.findOne = (req, res) => {
  clientService.findOne(req.params.id)
  .then(data => {
    console.log("data: ",data)
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({ message: err.message || "Erreur" });
  });
 
}

