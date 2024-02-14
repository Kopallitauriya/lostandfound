const express = require('express');
const verify = require('../middleware/auth');
const controller = require('../controllers/lostItems.controller');

const router = express.Router();

router.get('/', controller.getItems);
router.get('/foundIt/:id', verify, controller.foundIt);
router.delete('/delete/:id', verify, controller.deleteItem);

module.exports = router;
