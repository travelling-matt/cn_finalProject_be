require("dotenv").config();
const mongoose = require("mongoose");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_URI);

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
    }
};

sequelize.authenticate();

module.exports = sequelize;

connection();