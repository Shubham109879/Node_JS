"use strict";
// import { Sequelize } from "sequelize";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_config_1 = require("./sequelize.config");
const sequelize_1 = require("sequelize");
exports.Book = sequelize_config_1.sq.define("books", {
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    release_date: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    subject: {
        type: sequelize_1.DataTypes.INTEGER,
    }
});
sequelize_config_1.sq.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
