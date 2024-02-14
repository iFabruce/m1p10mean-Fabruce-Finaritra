module.exports = app => {
    const employee = require("../controllers/employee.controller.js");
    var router = require("express").Router();

    router.get("/findAll", employee.findAll);
    router.get("/findByUsername/:username", employee.findByUsername);
    router.get("/findOne/:id", employee.findOne);

    router.post("/create", employee.create);
    router.put("/update/:id", employee.update);
    router.delete("/delete/:id", employee.delete);

    app.use("/api/employee", router);
};