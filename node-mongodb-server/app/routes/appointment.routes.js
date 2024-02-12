module.exports = app => {
    const appointment = require("../controllers/appointment.controller.js");
    var router = require("express").Router();

    router.get("/findAll", appointment.findAll);
    router.get("/findOne/:username", appointment.findOne);
    router.post("/create", appointment.create);


    app.use("/api/appointment", router);
};
  