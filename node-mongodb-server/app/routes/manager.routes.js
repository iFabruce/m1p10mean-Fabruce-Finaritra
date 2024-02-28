module.exports = app => {
    const manager = require("../controllers/manager.controller.js");
    var router = require("express").Router();

    router.get("/workingTime", manager.workingTime);
    router.get("/getDailyAppointmentNumber", manager.getDailyAppointmentNumber);
    router.get("/getMonthlyAppointmentNumber", manager.getMonthlyAppointmentNumber);
    router.get("/getDailyCa", manager.getDailyCa);
    router.get("/getMonthlyCa", manager.getMonthlyCa);


    router.get("/findAll", manager.findAll);
    router.get("/findByUsername/:username", manager.findByUsername);
    router.get("/findOne/:id", manager.findOne);
    router.post("/create", manager.create);
    router.put("/update/:id", manager.update);
    router.delete("/delete/:id", manager.delete);
    
    router.get('/ca/:month/:year', manager.sommePrixAppointments);

    app.use("/api/manager", router);
};
  