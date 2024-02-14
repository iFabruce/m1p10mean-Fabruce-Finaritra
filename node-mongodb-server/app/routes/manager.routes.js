module.exports = app => {
    const manager = require("../controllers/manager.controller.js");
    var router = require("express").Router();

    router.get("/findAll", manager.findAll);
    router.get("/findByUsername/:username", manager.findByUsername);
    router.get("/findOne/:id", manager.findOne);
    router.post("/create", manager.create);
    router.put("/update/:id", manager.update);
    router.delete("/delete/:id", manager.delete);

    app.use("/api/manager", router);
};
  