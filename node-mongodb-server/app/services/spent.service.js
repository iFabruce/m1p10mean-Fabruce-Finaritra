const Spent = require('../models/spent.model');

exports.findAll = () => {
  return Spent.find();
};

exports.findById = (id) => {
  return Spent.findById(id);
};

exports.findOne = (month,year,type) => {
    const mySpent = Spent.find(
        {
            month,
            year,
            type
        }
      );
      if(mySpent.length===0){
        return null;
      }
      return mySpent;
  };

//Create
exports.create = (serviceData) => {
  try {
    const newSpent = new Spent(serviceData);
    return newSpent.save();
  } catch (error) {
    throw error;
  }
}

exports.updateSpent = async (spent) => {
    console.log("spentback",spent)
    try {
        const updatedSpent = await Spent.findOneAndUpdate(
          { "_id": spent._id },
          { $set: { price:spent.price } },
          { new: true }
        );
        console.log("Spt: ",updatedSpent)
        return updatedSpent;
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour de l'employe: ${error.message}`);
    }
  };

  exports.calculateTotalPrice = async (month, year) => {
    const titles = ["loyer", "autres", "salaire","achat pièce"];

    const totalPrices = {};

    for (const title of titles) {
        const spentItem = await Spent.findOne({ month, year, type: title });

        if (spentItem) {
            totalPrices[title] = spentItem.price;
        } else {
            totalPrices[title] = 0;
        }
    }

    const totalPrice = Object.values(totalPrices).reduce((acc, price) => acc + price, 0);

    return totalPrice;
};