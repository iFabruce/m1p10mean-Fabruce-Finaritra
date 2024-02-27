const mongoose = require('mongoose');

const SpentSchema = mongoose.Schema(
  {
    type: { type: String, required: true },
    price: { type: Number, required: true},
    month: { type: Number, required: true },
    year: { type: Number, required: true }
  },
  { timestamps: true }
);

SpentSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Spent = mongoose.model('Spent', SpentSchema);
module.exports = Spent;

