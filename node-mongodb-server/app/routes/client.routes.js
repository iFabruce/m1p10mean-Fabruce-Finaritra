module.exports = app => {
  const client = require("../controllers/client.controller.js");
  var router = require("express").Router();

  router.get("/findAll", client.findAll);
  router.post("/signin", client.signin);
  router.post("/signup", client.signup);



  app.use("/api/client", router);
};
