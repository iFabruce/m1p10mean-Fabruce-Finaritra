const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    schedules: { type: Number, required: true },
    status: { type: String, required: false },
  },
  { timestamps: true }
);

ServiceSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Service = mongoose.model('Service', ServiceSchema);
module.exports = Service;

