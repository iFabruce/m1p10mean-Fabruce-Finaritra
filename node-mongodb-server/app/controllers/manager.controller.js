const managerService = require('../services/manager.service');

exports.workingTime = (req,res) =>{
  managerService.workingTime()
    .then(data =>{
        res.send(data)
      }
    )
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
}
exports.findAll = (req, res) => {
  managerService.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
};

exports.findByUsername = (req, res) => {
  managerService.findByUsername(req.params.username)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
};
exports.findOne = (req, res) => {
  managerService.findOne(req.params.id)
  .then(data => {
    console.log("data: ",data)
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({ message: err.message || "Erreur" });
  });

}
exports.create = (req, res) => {
  managerService.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
};

exports.update = (req, res) => {
  managerService.update(req.params.id, req.body)
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
  managerService.delete(req.params.id, req.body)
  .then(
    data => {
      res.send(data);
    }
  )
  .catch(error =>{
    res.status(500).send({message: error.message || "Erreur"})
  })

};