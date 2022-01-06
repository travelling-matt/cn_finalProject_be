const { drink, ingredient } = require("./beverage.models.js");
const sequelize = require('sequelize');

exports.addDrinks = async (drinkObj) => {
    try {
        await drink.sync({
            alter: true
        });
        const drinkName = await drink.bulkCreate(drinkObj);
    } catch (error) {
        console.log(error);
    }
};

exports.addIngredients = async (ingredientObj) => {
    try {
        await ingredient.sync({
            alter: true
        });
        const ingredientName = await ingredient.bulkCreate(ingredientObj);
        console.log(`Added ${ingredientName} to Ingredient DB`);
    } catch (error) {
        console.log(error);
    }
};

exports.getAllDrinks = async (req, res) => {
    try {
        const list = await drink.findAll({
            attributes: ['id', 'name', 'alcoholic', 'ingredient1', 'ingredient2', 'ingredient3', 'ingredient4', 'ingredient5', 'ingredient6', 
            'ingredient7', 'ingredient8', 'ingredient9', 'ingredient10', 'ingredient11', 'ingredient12', 'ingredient13', 'ingredient14', 
            'ingredient15', 'thumbnailURL']
        });
        //const stringified = JSON.stringify(list);
        //const objectified = JSON.parse(stringified);
        //return objectified;
        res.status(200).send({message: "Successfully fetched drinks list", drinks: list});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "An error has occured"});
    }
};

exports.getMissingIngredients = async (req, res) => {
    try {
        let userIngredients = req.body.userIngredients;
        //userIngredients = userIngredients.replace("'", `"`);
        console.log(userIngredients);
        const list = await ingredient.findAll({
            where: {
                name: {
                    [sequelize.Op.notIn]: [userIngredients]
                }
            }
        });
        //const stringified = JSON.stringify(list);
        //const objectified = JSON.parse(stringified);
        //return objectified;
        res.status(200).send({message: "Successfully fetched ingredients list", ingredients: list});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "An error has occured"});
    }
}