// client.service.js
const Client = require('../models/client.model');

exports.findAllClients = (fullname) => {
  var condition = fullname ? { fullname: { $regex: new RegExp(fullname), $options: "i" } } : {};
  return Client.find(condition);
};
