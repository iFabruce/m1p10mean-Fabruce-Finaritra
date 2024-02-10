module.exports = app => {
    const employee = require("../controllers/employee.controller.js");
    var router = require("express").Router();

    router.get("/findAll", employee.findAll);
    router.get("/findOne/:username", employee.findOne);

    app.use("/api/employee", router);
};