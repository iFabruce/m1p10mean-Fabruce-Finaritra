// Service.service.js
const Service = require('../models/service.model');

exports.findAll = () => {
  return Service.find();
};

exports.findOne = (username) => {
  // var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  return Service.findOne({username});
};
exports.findById = (id) => {
  return Service.findOne({id: id});
};