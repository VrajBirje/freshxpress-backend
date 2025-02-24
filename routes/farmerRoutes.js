// routes/farmerRoutes.js
const express = require("express");
const { addFarmerHandler, getAllFarmersHandler, getFarmerByIdHandler, updateFarmerHandler, deleteFarmerHandler } = require("../controllers/farmerController");

const router = express.Router();

router.post("/farmers", addFarmerHandler);
router.get("/farmers", getAllFarmersHandler);
router.get("/farmers/:id", getFarmerByIdHandler);
router.put("/farmers/:id", updateFarmerHandler);
router.delete("/farmers/:id", deleteFarmerHandler);

module.exports = router;
