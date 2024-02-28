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
    const {month,year,type}=req.params;
    spentService.findOne(month,year,type)
    .then(data => {
      console.log("data: ",data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Erreur" });
    });
  
  }

  exports.create = async (req, res) => {
    console.log("create",req.body)
    await spentService.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ message: err.message || "Erreur" });
      });
  };

  exports.update = (req, res) => {
    spentService.updateSpent(req.body)
      .then(
        data => {
          res.send(data);
        }
      )
      .catch(error =>{
        res.status(500).send({message: error.message || "Erreur"})
      })
  };
  
  exports.calculateTotalPrice = (req, res) => {
    const { month, year } = req.params;
    spentService.calculateTotalPrice(month, year)
        .then(data => {
            res.status(200).send({ totalPrice: data }); // Utilisez un code d'état HTTP valide (par exemple, 200 OK)
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: err.message || "Erreur" });
        });
};


