const express = require('express');
const axios = require('axios');
const router = express.Router();
const checklistController = require('../controllers/checklistController');

// Define the route to get checklist data
router.get('/evaluate', checklistController.evaluateChecklist);

module.exports = router;