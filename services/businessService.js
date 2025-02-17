const { supabase } = require('../config/config');

const createBusiness = async (data) => {
    const { data: newBusiness, error } = await supabase
        .from('business')
        .insert([data])
        .select();
    if (error) throw error;
    return newBusiness;
};

const getAllBusinesses = async () => {
    const { data, error } = await supabase
        .from('business')
        .select('*');
    if (error) throw error;
    return data;
};

const getBusinessById = async (id) => {
    const { data, error } = await supabase
        .from('business')
        .select('*')
        .eq('id', id)
        .single();
    if (error) throw error;
    return data;
};

const updateBusiness = async (id, updates) => {
    const { data, error } = await supabase
        .from('business')
        .update(updates)
        .eq('id', id)
        .select();
    if (error) throw error;
    return data;
};

const deleteBusiness = async (id) => {
    const { error } = await supabase
        .from('business')
        .delete()
        .eq('id', id);
    if (error) throw error;
    return { message: 'Business deleted successfully' };
};

module.exports = { createBusiness, getAllBusinesses, getBusinessById, updateBusiness, deleteBusiness };
