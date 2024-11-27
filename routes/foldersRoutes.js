// routes/foldersRoutes.js

const express = require('express');
const foldersController = require('../controllers/foldersController');

const router = express.Router();

router.get('/folders/:user_id', foldersController.getFolders);  // Get folders by user_id
router.post('/folders', foldersController.createFolder);       // Create a new folder
router.get('/folders/:id', foldersController.getFolderById);   // Get folder by id
router.put('/folders/:id', foldersController.updateFolder);    // Update folder
router.delete('/folders/:id', foldersController.deleteFolder); // Delete folder

module.exports = router;
