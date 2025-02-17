const businessService = require('../services/businessService');

const createBusiness = async (req, res) => {
    try {
        const business = await businessService.createBusiness(req.body);
        res.status(201).json(business);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllBusinesses = async (req, res) => {
    try {
        const businesses = await businessService.getAllBusinesses();
        res.status(200).json(businesses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getBusinessById = async (req, res) => {
    try {
        const business = await businessService.getBusinessById(req.params.id);
        res.status(200).json(business);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateBusiness = async (req, res) => {
    try {
        const updatedBusiness = await businessService.updateBusiness(req.params.id, req.body);
        res.status(200).json(updatedBusiness);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBusiness = async (req, res) => {
    try {
        const response = await businessService.deleteBusiness(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createBusiness, getAllBusinesses, getBusinessById, updateBusiness, deleteBusiness };
