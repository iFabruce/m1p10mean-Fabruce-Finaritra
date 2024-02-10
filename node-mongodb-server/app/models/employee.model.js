module.exports = mongoose => {
  const EmployeeSchema = mongoose.Schema(
    {
      fullname: { type: String, required: true },
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      picture: { type: String, required: false},
      schedules: { type: String, required: true },
      status: { type: String, required: true },
    },
    { timestamps: true }
  );

  EmployeeSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Employee = mongoose.model('Employee', EmployeeSchema);
  return Employee;
};
