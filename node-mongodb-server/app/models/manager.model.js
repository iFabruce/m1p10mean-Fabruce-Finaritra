const mongoose = require('mongoose');

const ManagerSchema = mongoose.Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

ManagerSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Manager = mongoose.model('Manager', ManagerSchema);
module.exports = Manager;

