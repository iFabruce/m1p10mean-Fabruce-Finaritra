const spentService = require('../services/spent.service');

exports.findAll = (req, res) => {
    spentService.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
  };

  exports.findById = (req, res) => {
    spentService.findById(req.params.id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
  };

  exports.findOne = (req, res) => {
    const {month,year,type}=request.params;
    spentService.findOne(month,year,type)
    .then(data => {
      console.log("data: ",data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
  
  }

  exports.create = (req, res) => {
    spentService.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
  };