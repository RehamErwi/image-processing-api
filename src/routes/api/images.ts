import express from 'express';
import imageController from '../../controllers/imageController';
const images = express.Router();

images.use('/', imageController);

export default images;
