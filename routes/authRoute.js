const express = require('express');
const adminController = require('../controllers/admin/adminController');

const router = express.Router();

// admin Login
router.post('/login', adminController.adminLogin);

 


module.exports = router;  