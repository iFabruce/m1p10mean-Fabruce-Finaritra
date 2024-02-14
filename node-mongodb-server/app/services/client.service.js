// client.service.js
const Client = require('../models/client.model');

exports.findAll = () => {
  return Client.find();
};

exports.findByUsername = (username) => {
  // var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  return Client.findOne({username});
};
exports.findOne = (id) => {
  return Client.findById(id);
};
