const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, unique: true },
    duration: { type: Number, required: true },
    commission: { type: String, required: false },
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

