const express = require('express');
const verify = require('../middleware/auth');
const controller = require('../controllers/foundItems.controller');

const router = express.Router();

router.get('/', controller.getItems);
router.get('/claimIt/:id', verify, controller.claimIt);
router.delete('/delete/:id', verify, controller.deleteItem);

module.exports = router;
