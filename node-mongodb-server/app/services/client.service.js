// client.service.js
const Client = require('../models/client.model');

exports.findAll = () => {
  return Client.find();
};

exports.findOne = (username) => {
  // var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  return Client.findOne({username});
};
exports.findById = (id) => {
  return Client.findOne({id: id});
};
