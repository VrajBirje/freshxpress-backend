const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Business = sequelize.define('Business', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    business_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    business_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pincode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    website: {
        type: DataTypes.STRING,
    },
    opening_hours: {
        type: DataTypes.STRING,
    },
    ratings: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    reviews_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    services: {
        type: DataTypes.TEXT,
    },
    latitude: {
        type: DataTypes.FLOAT,
    },
    longitude: {
        type: DataTypes.FLOAT,
    },
    image_url: {
        type: DataTypes.STRING,
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true, // Includes `createdAt` and `updatedAt`
});

module.exports = Business;
