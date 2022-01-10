const { Router, request } = require("express");
const { addUser, login, addIngredients } = require("./user/user.methods.js");
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
requestRouter.post("/addIngredients", addIngredients);

module.exports = requestRouter;