const { Router } = require("express");
const { addUser, login } = require("./user/user.methods.js");
const { getAllDrinks, getMissingIngredients } = require("./beverage/beverage.methods.js");
const {
    decryptPassword,
    hashPassword,
    tokenDecoding,
} = require("./middleware");
const requestRouter = Router();

requestRouter.post("/user", hashPassword, addUser);
requestRouter.post("/login", decryptPassword, login);
requestRouter.get("/user", tokenDecoding, login);
requestRouter.get("/fetchDrinks", getAllDrinks);
requestRouter.post("/fetchIngredients", getMissingIngredients);

module.exports = requestRouter;