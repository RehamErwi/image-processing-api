import express from 'express';
import resizeImageController from '../../controllers/ImageController';
const images = express.Router();

images.use('/', resizeImageController);

export default images;
