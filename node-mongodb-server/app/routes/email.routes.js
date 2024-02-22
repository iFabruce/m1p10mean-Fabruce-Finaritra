module.exports = app => {
    const email = require("../controllers/email.controller.js");
    var router = require("express").Router();
  
    router.post("/reservation", email.standard_mail);
  
    app.use("/api/email", router);
  };
  