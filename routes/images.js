const express = require('express');
const imageController = require('../controllers/image.controller');
const imageUploder = require('../image-uploader');
const auth = require( './auth');
const multer = require ('multer');

const router = express.Router();

router.post('/upload', auth, imageUploder.upload.single('image'), imageController.upload);

module.exports = router;