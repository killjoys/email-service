const express = require('express');
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const historyController = require('../controllers/history');

const router = express.Router();

router.get('/', multipartMiddleware, historyController.getAllHistory);
router.get('/:history_id', multipartMiddleware, historyController.getSpecifiedHistory);

module.exports = router;