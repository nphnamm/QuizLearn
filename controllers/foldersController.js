// controllers/foldersController.js

const supabase = require('../db/index');

// Get all folders for a specific user
async function getFolders(req, res) {
  const { user_id } = req.params;
  
  const { data, error } = await supabase.from('folders').select('*').eq('user_id', user_id);
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  return res.status(200).json(data);
}


// Example: Insert folder logic
async function createFolder(req, res) {


  // Proceed with creating the folder if the table exists
  const { user_id, name, description } = req.body;
  
  const { data, error } = await supabase.from('folders').insert([
    { user_id, name, description }
  ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json(data);
}

module.exports = { createFolder };

// Get a specific folder by ID
async function getFolderById(req, res) {
  const { id } = req.params;
  
  const { data, error } = await supabase.from('folders').select('*').eq('id', id).single();
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  return res.status(200).json(data);
}

// Update a folder by ID
async function updateFolder(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  
  const { data, error } = await supabase.from('folders').update({ name }).eq('id', id);
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  return res.status(200).json(data);
}

// Delete a folder by ID
async function deleteFolder(req, res) {
  const { id } = req.params;
  
  const { data, error } = await supabase.from('folders').delete().eq('id', id);
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  return res.status(200).json({ message: 'Folder deleted successfully' });
}

module.exports = { getFolders, createFolder, getFolderById, updateFolder, deleteFolder };
