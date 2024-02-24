// client.Employee.js
const Employee = require('../models/employee.model');

exports.findAll = () => {
  return Employee.find();
};

exports.findStatus = (statusFilter) => {
  if(statusFilter.status==="actif"){
    console.log("actif",statusFilter)
    return Employee.find({status:"actif"});
  }else{
    console.log(statusFilter)
    return Employee.find({status:"inactif"});
  }
};

exports.findByUsername = (username) => {
  return Employee.findOne({username});
};

exports.findOne = (id) => {
  return Employee.findById(id);
};

//Create
exports.create = (EmployeeData) => {
  try {
    const newEmployee = new Employee(EmployeeData);
    return newEmployee.save();
  } catch (error) {
    throw error;
  }
}
// Update
exports.update = (EmployeeId, updatedEmployeeData) => {
  try {
    return Employee.findByIdAndUpdate(EmployeeId, updatedEmployeeData, { new: true });
  } catch (error) {
    throw error;
  }
}

// Delete
exports.delete = (EmployeeId) => {
  try {
    return Employee.findByIdAndDelete(EmployeeId);
  } catch (error) {
    throw error;
  }
}


exports.updateManyStatus = async (employees) => {
  try {
    const updatePromises = employees.map(async (employee) => {
      const updatedEmployee = await Employee.findOneAndUpdate(
        { "_id": employee._id.$oid },
        { $set: { status: "inactif" } },
        { new: true }
      );
      return updatedEmployee;
    });

    const updatedEmployees = await Promise.all(updatePromises);
    return updatedEmployees;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du client: ${error.message}`);
  }
};

exports.updateStatus = async (employee,statusFilter) => {
  try {
    console.log(employee)
      const updatedEmployee = await Employee.findOneAndUpdate(
        { "_id": employee.id },
        { $set: { status: statusFilter } },
        { new: true }
      );
      console.log("Emp: ",updatedEmployee)
      return updatedEmployee;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour du status: ${error.message}`);
  }
};

exports.updateEmploye = async (employee) => {
  console.log("employeeback",employee)
  try {
      const updatedEmployee = await Employee.findOneAndUpdate(
        { "_id": employee._id },
        { $set: { fullname: employee.fullname, username:employee.username, schedules:employee.schedules } },
        { new: true }
      );
      console.log("Emp: ",updatedEmployee)
      return updatedEmployee;
  } catch (error) {
    throw new Error(`Erreur lors de la mise à jour de l'employe: ${error.message}`);
  }
};
