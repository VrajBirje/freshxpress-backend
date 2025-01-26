const { Business } = require('../models');

// Service to handle database queries
const businessService = {
    createBusiness: async (data) => await Business.create(data),
    getAllBusinesses: async () => await Business.findAll(),
    getBusinessById: async (id) => await Business.findByPk(id),
    updateBusiness: async (id, data) => await Business.update(data, { where: { id } }),
    deleteBusiness: async (id) => await Business.destroy({ where: { id } }),
};

module.exports = businessService;
