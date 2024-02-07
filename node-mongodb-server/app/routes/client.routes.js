module.exports = app => {
  const client = require("../controllers/client.controller.js");
  var router = require("express").Router();

  router.get("/findAll", client.findAll);

  app.use("/api/client", router);
};
