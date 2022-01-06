const sequelize = require("../db/connection.js");
const { INTEGER, STRING } = require("sequelize");

const drink = sequelize.define("drink", {
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    alcoholic: {
        type: STRING,
        allowNull: false
    },
    ingredient1: {
        type: STRING,
        allowNull: false
    },
    ingredient2: {
        type: STRING,
        allowNull: true
    },
    ingredient3: {
        type: STRING,
        allowNull: true
    },
    ingredient4: {
        type: STRING,
        allowNull: true
    },
    ingredient5: {
        type: STRING,
        allowNull: true
    },
    ingredient6: {
        type: STRING,
        allowNull: true
    },
    ingredient7: {
        type: STRING,
        allowNull: true
    },
    ingredient8: {
        type: STRING,
        allowNull: true
    },
    ingredient9: {
        type: STRING,
        allowNull: true
    },
    ingredient10: {
        type: STRING,
        allowNull: true
    },
    ingredient11: {
        type: STRING,
        allowNull: true
    },
    ingredient12: {
        type: STRING,
        allowNull: true
    },
    ingredient13: {
        type: STRING,
        allowNull: true
    },
    ingredient14: {
        type: STRING,
        allowNull: true
    },
    ingredient15: {
        type: STRING,
        allowNull: true
    },
    thumbnailURL: {
        type: STRING,
        allowNull: false
    }
});

const ingredient = sequelize.define("ingredient", {
    name: {
        type: STRING,
        primaryKey: true,
        allowNull: false
    }
});

module.exports = { drink, ingredient };