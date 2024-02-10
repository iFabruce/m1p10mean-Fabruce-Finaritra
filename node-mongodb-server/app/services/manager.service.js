// client.service.js
const Manager = require('../models/manager.model');

exports.findAll = () => {
  return Manager.find();
};

exports.findOne = (username) => {
  var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  return Manager.findOne(condition);
};
