// Service.service.js
const Service = require('../models/service.model');

exports.findAll = () => {
  return Service.find();
};

exports.findByUsername = (username) => {
  return Service.findOne({username});
};

exports.findOne = (id) => {
  return Service.findById(id);
};

//Create
exports.create = (serviceData) => {
  try {
    const newService = new Service(serviceData);
    return newService.save();
  } catch (error) {
    throw error;
  }
}
// Update
exports.update = (serviceId, updatedServiceData) => {
  try {
    return Service.findByIdAndUpdate(serviceId, updatedServiceData, { new: true });
  } catch (error) {
    throw error;
  }
}

// Delete
exports.delete = (serviceId) => {
  try {
    return Service.findByIdAndDelete(serviceId);
  } catch (error) {
    throw error;
  }
}