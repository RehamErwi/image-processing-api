import express from 'express';
import imageController from '../../controllers/ImageController';
const images = express.Router();

images.use('/', imageController);

export default images;
