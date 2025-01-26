const businessService = require('../services/businessServices');

const createBusiness = async (req, res) => {
    try {
        const data = req.body;
        const business = await businessService.createBusiness(data);
        res.status(201).json(business);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllBusinesses = async (req, res) => {
    try {
        const businesses = await businessService.getAllBusinesses();
        res.status(200).json(businesses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBusinessById = async (req, res) => {
    try {
        const { id } = req.params;
        const business = await businessService.getBusinessById(id);
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }
        res.status(200).json(business);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBusiness = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const [updated] = await businessService.updateBusiness(id, data);
        if (!updated) {
            return res.status(404).json({ message: 'Business not found' });
        }
        res.status(200).json({ message: 'Business updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteBusiness = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await businessService.deleteBusiness(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Business not found' });
        }
        res.status(200).json({ message: 'Business deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBusiness,
    getAllBusinesses,
    getBusinessById,
    updateBusiness,
    deleteBusiness,
};
