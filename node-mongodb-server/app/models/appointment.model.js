const mongoose = require('mongoose');

const choosenService = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  name: { type: String, required: true },
  price: { type: String, required: true },
  duration: {type: Number,required: true },
  commision: {type: Number,required: true },
});

const choosenEmployee = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  fullname: { type: String, required: true },
});

const client = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  fullname: { type: String, required: true },
});


const AppointmentSchema = mongoose.Schema(
  {
    startingDate: { type: String, required: true },
    client: { type: client},
    service: { type: choosenService},
    employee: { type: choosenEmployee},
    status: { type: String, required: false }
  },
  { timestamps: true }
);

AppointmentSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;

