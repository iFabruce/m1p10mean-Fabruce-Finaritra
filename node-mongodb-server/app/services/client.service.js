// client.service.js
const Client = require('../models/client.model');

exports.findAll = () => {
  return Client.find().populate('favoriteEmployee.id');
};

exports.findByUsername = (username) => {
  // var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  return Client.findOne({username});
};

exports.findOne = (id) => {
  return Client.findById(id);
};

exports.addWallet = async (id, price) => {
  try {
    const client = await Client.findById(id);
    
    if (!client) {
      throw new Error("Client not found");
    }

    client.wallet += price;
    const updatedClient = await client.save();

    return updatedClient;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du porte-feuille : ${error.message}`);
  }
};


exports.updateFavorite = async (clientId, newFavoriteEmployeeData,newFavoriteServiceData) => {
  try {
    const updatedClient = await Client.findOneAndUpdate(
      { _id: clientId },
      { $set: { favoriteEmployee: newFavoriteEmployeeData, favoriteService: newFavoriteServiceData } },
      { new: true }
    );
    return updatedClient;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du client: ${error.message}`);
  }
}
