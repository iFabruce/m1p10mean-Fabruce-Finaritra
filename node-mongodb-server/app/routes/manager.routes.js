module.exports = app => {
    const manager = require("../controllers/manager.controller.js");
    var router = require("express").Router();

    router.get("/findAll", manager.findAll);
    router.get("/findOne/:username", manager.findOne);

    app.use("/api/manager", router);
};
  