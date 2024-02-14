const express = require('express');
const verify = require('../middleware/auth');
const controller = require('../controllers/report.controller');

const router = express.Router();

router.post('/', verify, controller.createItem);

module.exports = router;
