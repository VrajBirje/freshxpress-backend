// controllers/farmerController.js
const farmerService = require("../services/farmerService");

const addFarmerHandler = async (req, res) => {
  try {
    const newFarmer = await farmerService.addFarmer(req.body);
    res.status(201).json(newFarmer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllFarmersHandler = async (req, res) => {
  try {
    const farmers = await farmerService.getAllFarmers();
    res.status(200).json(farmers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFarmerByIdHandler = async (req, res) => {
  try {
    const farmer = await farmerService.getFarmerById(req.params.id);
    if (!farmer) return res.status(404).json({ error: "Farmer not found" });
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFarmerHandler = async (req, res) => {
  try {
    const updatedFarmer = await farmerService.updateFarmer(req.params.id, req.body);
    res.status(200).json(updatedFarmer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFarmerHandler = async (req, res) => {
  try {
    await farmerService.deleteFarmer(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addFarmerHandler, getAllFarmersHandler, getFarmerByIdHandler, updateFarmerHandler, deleteFarmerHandler };
