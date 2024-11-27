// controllers/usersController.js

const supabase = require('../db/index');

// Get all users
async function getUsers(req, res) {
  const { data, error } = await supabase.from('users').select('*');
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  return res.status(200).json(data);
}

// Create a new user
async function createUser(req, res) {
  const { name, email } = req.body;
  
  const { data, error } = await supabase.from('users').insert([
    { name, email }
  ]);
  
  if (error) {
    console.log(error)
    return res.status(500).json({ error: error.message });
  }
  
  return res.status(201).json(data);
}

// Get a specific user by ID
async function getUserById(req, res) {
  const { id } = req.params;
  
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  return res.status(200).json(data);
}

// Update a user by ID
async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;
  
  const { data, error } = await supabase.from('users').update({ name, email }).eq('id', id);
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  return res.status(200).json(data);
}

// Delete a user by ID
async function deleteUser(req, res) {
  const { id } = req.params;
  
  const { data, error } = await supabase.from('users').delete().eq('id', id);
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  return res.status(200).json({ message: 'User deleted successfully' });
}

module.exports = { getUsers, createUser, getUserById, updateUser, deleteUser };
