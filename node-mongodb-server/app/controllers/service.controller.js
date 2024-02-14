const serviceService = require('../services/service.service');

exports.findAll = (req, res) => {
  serviceService.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
};

exports.findByUsername = (req, res) => {
  serviceService.findByUsername(req.params.username)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
};
exports.findOne = (req, res) => {
  serviceService.findOne(req.params.id)
  .then(data => {
    console.log("data: ",data)
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({ message: err.message || "Erreur" });
  });

}
exports.create = (req, res) => {
  serviceService.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
};

exports.update = (req, res) => {
  serviceService.update(req.params.id, req.body)
    .then(
      data => {
        res.send(data);
      }
    )
    .catch(error =>{
      res.status(500).send({message: error.message || "Erreur"})
    })
};

exports.delete = (req, res) => {
  serviceService.delete(req.params.id, req.body)
  .then(
    data => {
      res.send(data);
    }
  )
  .catch(error =>{
    res.status(500).send({message: error.message || "Erreur"})
  })

};