module.exports = app => {
    const client = require("../controllers/client.controller.js");
    var router = require("express").Router();

    router.get("/findAll", client.findAll);
    router.get("/findByUsername/:username", client.findByUsername);
    router.get("/findOne/:id", client.findOne);
    router.put('/:clientId/updateFavorite', client.updateFavoriteController);
    router.put('/:clientId/addWallet', client.addWallet);
    router.put('/:clientId/payment', client.payment);


    app.use("/api/client", router);
};
  