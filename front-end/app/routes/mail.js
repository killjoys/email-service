const express = require('express');
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const mailController = require('../controllers/mail');

const router = express.Router();

router.post('/', multipartMiddleware, mailController.sendMail);

module.exports = router;
