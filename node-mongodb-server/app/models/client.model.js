const mongoose = require('mongoose');

const FavoriteEmployeeSchema = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  fullname: { type: String, required: true },
});

const FavoriteServiceSchema = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  name: { type: String, required: true },
});

const ClientSchema = mongoose.Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    wallet: { type: String, required: true },
    favoriteEmployee: { type: FavoriteEmployeeSchema, ref: 'Employee' },
    favoriteService: { type: FavoriteServiceSchema, ref: 'Service' },
  },
  { timestamps: true }
);

ClientSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;
