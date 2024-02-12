const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.client = require("./client.model.js")(mongoose);
db.employee = require("./employee.model.js")(mongoose);
db.manager = require("./manager.model.js")(mongoose);
db.service = require("./service.model.js")(mongoose);
db.appointment = require("./appointment.model.js")(mongoose);




module.exports = db;
