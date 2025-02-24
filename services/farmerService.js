// services/farmerService.js
const supabase = require("../config/db");

// Add a new farmer
const addFarmer = async (farmerData) => {
    console.log("Supabase client:", supabase); // Debugging line
    const { data, error } = await supabase
      .from("farmer")
      .insert([farmerData])
      .select();
  
    if (error) throw error;
    return data;
  };

// Get all farmers
const getAllFarmers = async () => {
  const { data, error } = await supabase.from("farmer").select("*");
  if (error) throw new Error(error.message);
  return data;
};

// Get a farmer by ID
const getFarmerById = async (id) => {
  const { data, error } = await supabase.from("farmer").select("*").eq("id", id).single();
  if (error) throw new Error(error.message);
  return data;
};

// Update a farmer by ID
const updateFarmer = async (id, farmerData) => {
  const { data, error } = await supabase.from("farmer").update(farmerData).eq("id", id).select();
  if (error) throw new Error(error.message);
  return data;
};

// Delete a farmer by ID
const deleteFarmer = async (id) => {
  const { error } = await supabase.from("farmer").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return { message: "Farmer deleted successfully." };
};

module.exports = { addFarmer, getAllFarmers, getFarmerById, updateFarmer, deleteFarmer };
