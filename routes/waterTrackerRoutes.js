const express = require('express');
const waterController = require('../controllers/waterTrackerController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

router.get('/api/water-intake', waterController.getWaterIntake, isAuthenticated);
router.post('/api/water-intake', waterController.addWaterIntake, isAuthenticated);
router.post('/reset', waterController.resetWaterIntake, isAuthenticated);

module.exports = router;
