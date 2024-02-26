module.exports = app => {
    const appointment = require("../controllers/appointment.controller.js");
    var router = require("express").Router();

    router.get("/findAll", appointment.findAll);
    router.get("/findOne/:username", appointment.findOne);
    router.post("/create", appointment.create);
    router.get("/employeeAppointment/:employeeId/:date", appointment.employeeAppointment);
    router.post("/create", appointment.create);
    router.post('/clientAppointment', appointment.getAppointmentsByClientAndDateRange);
    router.get('/calendar/:clientId', appointment.getClientAppointment);
    router.get('/calendarEmployee/:employeeId', appointment.getEmployeeAppointment);



    router.put("/updateStatus", appointment.updateStatus);
    router.get("/findByStatus/:status", appointment.findByStatus);

    app.use("/api/appointment", router);
};
  