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

// Signin
exports.signin = (req, res) => {
  const { username, password } = req.body;
  console.log("username:"+username + " password:"+password)
  // Recherche de l'utilisateur dans la base de données par nom d'utilisateur
  Client.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
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

//Signup
exports.signup = (req, res) => {
  const { username, password, fullname  } = req.body;

  // Vérification si l'utilisateur existe déjà
  Client.findOne({ username })
    .then(existingUser => {
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      // Hachage du mot de passe
      bcrypt.hash(password, 10)
        .then(hashedPassword => {
          // Création d'un nouvel utilisateur
          const newUser = new Client({
            username,
            password: hashedPassword,
            fullname,
            wallet: 100,
            // preferedEmployee
          });

          // Sauvegarde de l'utilisateur dans la base de données
          newUser.save()
            .then(savedUser => {
              // Création du token JWT
              const token = jwt.sign({ id: savedUser._id, username: savedUser.username }, 'secret_key', { expiresIn: '1h' });

              // Réponse avec le token
              res.json({ token });
            })
            .catch(saveErr => {
              res.status(500).json({ message: 'Error saving user to the database' });
            });
        })
        .catch(hashErr => {
          res.status(500).json({ message: 'Error hashing password' });
        });
    })
    .catch(err => {
      res.status(500).json({ message: 'Internal Server Error' });
    });
};
