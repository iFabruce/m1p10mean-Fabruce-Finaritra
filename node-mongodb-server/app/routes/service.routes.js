module.exports = app => {
    const service = require("../controllers/service.controller.js");
    var router = require("express").Router();

    router.get("/findAll", service.findAll);
    router.get("/findByUsername/:username", service.findByUsername);
    router.get("/findOne/:id", service.findOne);
    router.post("/create", service.create);
    router.put("/update/:id", service.update);
    router.delete("/delete/:id", service.delete);
    router.put("/updateStatus", service.updateStatus);
    router.put("/updateService", service.updateService);
    router.get("/findByStatus/:status", service.findByStatus);

    app.use("/api/service", router);
};