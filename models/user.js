const { Sequelize } = require("sequelize");
const sequelize = require("../config/config");


const Users = sequelize.define('users', {

    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    order: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    approved: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    point_of_reference: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    time_of_sale: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.ENUM('superadmin', 'admin', 'user'),
        allowNull: false,
    },
    time_of_sale: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});


module.exports = Users;