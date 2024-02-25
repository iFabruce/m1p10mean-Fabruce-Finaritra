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

exports.updateStatus = async (service,statusFilter) => {
  try {
    console.log(service)
      const updatedService = await Service.findOneAndUpdate(
        { "_id": service.id },
        { $set: { status: statusFilter } },
        { new: true }
      );
      console.log("Serv: ",updatedService)
      return updatedService;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du status: ${error.message}`);
  }
};

exports.updateService = async (service) => {
  console.log("serviceback",service.id)
  try {
      const updatedService = await Service.findOneAndUpdate(
        { "id": service.id },
        { $set: { name: service.name, price:service.price, duration:service.duration, commission:service.commission } },
        { new: true }
      );
      console.log("Serv: ",updatedService)
      return updatedService;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du service: ${error.message}`);
  }
};

exports.findStatus = (statusFilter) => {
  if(statusFilter.status==="actif"){
    console.log("actif",statusFilter)
    return Service.find({status:"actif"});
  }else{
    console.log(statusFilter)
    return Service.find({status:"inactif"});
  }
};