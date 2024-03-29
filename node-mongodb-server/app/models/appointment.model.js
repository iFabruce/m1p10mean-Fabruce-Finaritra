// appointment.model.js

const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
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

AppointmentSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
