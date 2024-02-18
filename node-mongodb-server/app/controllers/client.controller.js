const clientService = require('../services/client.service');
const mongoose = require('mongoose');

exports.findAll = (req, res) => {
    clientService.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
        console.log(err)
      });
};
exports.findByUsername = (req, res) => {
    clientService.findByUsername(req.params.username)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
        console.log(err)
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

exports.updateFavoriteController = async (req, res) => {
  const clientId = req.params.clientId;
  const newFavoriteEmployeeData = req.body.favoriteEmployee; // Assurez-vous que votre corps de demande contient les données mises à jour
  const newFavoriteServiceData = req.body.favoriteService;
  try {
    const updatedClient = await clientService.updateFavorite(clientId, newFavoriteEmployeeData, newFavoriteServiceData);
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
}

exports.addWallet = async (req, res) => {
  const clientId = req.params.clientId; 
  const price = req.body.price; 
  try {
    const addWallet = await clientService.addWallet(clientId, price);
    res.json(addWallet);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
}