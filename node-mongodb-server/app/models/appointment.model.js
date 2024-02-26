// appointment.model.js

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  startingDate: Date,
  endingDate: Date,
  client: {
    fullname: String,
    _id: mongoose.Types.ObjectId,
  },
  service: {
    name: String,
    price: Number,
    duration: Number,
    _id: mongoose.Types.ObjectId,
  },
  employee: {
    fullname: String,
    _id: mongoose.Types.ObjectId,
  },
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
