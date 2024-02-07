const db = require("../models");
const Client = db.client; // Assurez-vous que votre modèle s'appelle "users" ou ajustez le nom en conséquence

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//
exports.findAll = (req, res) => {
  const fullname = req.query.fullname;
  var condition = fullname ? { fullname: { $regex: new RegExp(fullname), $options: "i" } } : {};

  Client.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erreur"
      });
    });
};

// Login
exports.login = (req, res) => {
  const { username, password } = req.body;

  // Recherche de l'utilisateur dans la base de données par nom d'utilisateur
  Client.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // Vérification du mot de passe
      bcrypt.compare(password, user.password)
        .then(isValid => {
          if (!isValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
          }

          // Création du token JWT
          const token = jwt.sign({ id: user._id, username: user.username }, 'secret_key', { expiresIn: '1h' });

          // Réponse avec le token
          res.json({ token });
        })
        .catch(err => {
          res.status(500).json({ message: 'Internal Server Error' });
        });
    })
    .catch(err => {
      res.status(500).json({ message: 'Internal Server Error' });
    });
};
