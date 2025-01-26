const sequelize = require('../config/db');
const Business = require('./business');

// Synchronize models with the database
(async () => {
    try {
        await sequelize.sync({ alter: true }); // Use `force: true` for full table reset
        console.log('Database models synchronized.');
    } catch (error) {
        console.error('Failed to synchronize models:', error.message);
    }
})();

module.exports = { Business };
