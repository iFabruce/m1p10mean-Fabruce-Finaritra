// client.service.js
const Manager = require('../models/manager.model');

exports.findAll = () => {
  return Manager.find();
};

exports.findOne = (username) => {
  return Manager.findOne({username});
};
