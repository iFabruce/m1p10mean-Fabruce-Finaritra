const employeeService = require('../services/employee.service');

exports.findAll = (req, res) => {
  employeeService.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
};

exports.findByUsername = (req, res) => {
  employeeService.findByUsername(req.params.username)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
};
exports.findOne = (req, res) => {
  employeeService.findOne(req.params.id)
  .then(data => {
    console.log("data: ",data)
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({ message: err.message || "Erreur" });
  });

}
exports.create = (req, res) => {
  employeeService.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
};

exports.update = (req, res) => {
  employeeService.update(req.params.id, req.body)
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
  employeeService.delete(req.params.id, req.body)
  .then(
    data => {
      res.send(data);
    }
  )
  .catch(error =>{
    res.status(500).send({message: error.message || "Erreur"})
  })

};