module.exports = app => {
    const spent = require("../controllers/spent.controller.js");
    var router = require("express").Router();

    router.get("/findAll", spent.findAll);
    router.get("/findById/:id", spent.findById);
    router.get('/findOne/:month/:year/:type', spent.findOne);
    router.get('/calculateBenefice/:month/:year', spent.calculateBenefice);
    router.post("/create", spent.create);
    router.put("/update", spent.update);
    router.get("/calculateTotalPrice/:month/:year", spent.calculateTotalPrice);

    app.use("/api/spent", router);
};