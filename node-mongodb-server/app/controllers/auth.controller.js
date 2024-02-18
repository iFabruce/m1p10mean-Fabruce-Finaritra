 // Assurez-vous que votre modèle s'appelle "users" ou ajustez le nom en conséquence
const clientService = require('../services/client.service');
const employeeService = require('../services/employee.service');
const managerService = require('../services/manager.service');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Signin
exports.signin = (req, res) => {
  const { username, password, profil } = req.body;
  console.log(profil.name)
  //CLIENT
  if(profil.name == "Client"){
    console.log("c")
    clientService.findByUsername(username)
      .then(user => {
        if (!user) return res.status(401).json({ message: 'User not found' });
        bcrypt.compare(password, user.password)
          .then(isValid => {
            if (!isValid) return res.status(401).json({ message: 'Invalid username or password' });
            const token = jwt.sign({ id: user._id, username: user.username }, 'secret_key', { expiresIn: '1h' });
            res.json({ token, profil: user.id, type: 'Client'});
          })
          .catch(err => {
            res.status(500).json({ message: err.message });
          });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  }
  //EMPLOYEE
  else if(profil.name == "Employé"){
    console.log("e",username)
    employeeService.findByUsername(username)
      .then(user => {
        if (!user) return res.status(401).json({ message: 'User not found' });
        if(password == user.password){
          res.json({ token: 'Employee', profil: user.id, type: 'Employee'})
        }
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  }
    
    //MANAGER
    else if(profil.name == "Manager"){
      console.log("m")
      managerService.findByUsername(username)
        .then(user => {
          if (!user) return res.status(401).json({ message: 'User not found' });
          if(password == user.password){
            res.json({ token: 'Manager', profil: user.id, type: 'Manager'})
          }
        })
        .catch(err => {
          res.status(500).json({ message: err.message });
        });
    }
    else{
      return res.status(401).json({ message: 'Choose a profile' });
    }

};

//Signup
exports.signup = (req, res) => {
  const { username, password, fullname  } = req.body;

  // Vérification si l'utilisateur existe déjà
  clientService.findOne(username)
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
