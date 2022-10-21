import { RequestHandler } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imageController: RequestHandler = (req, res, next) => {
    const filename = req.query.filename;
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);

    const inputFilePath = path.join(
        __dirname,
        '../../assets/images/full',
        `${filename}.jpg`
    );
    const outputFilePath = path.join(
        __dirname,
        '../../assets/images/thumb',
        `${filename}-w${width}-h${height}.jpg`
    );

    if (fs.existsSync(inputFilePath)) {
        sharp(inputFilePath)
            .resize(width, height)
            .toFile(outputFilePath)
            .catch((err) => console.log(err));

        setTimeout(
            () =>
                fs.existsSync(outputFilePath)
                    ? res.sendFile(outputFilePath)
                    : res.send('Failed to resize the image'),
            3000
        );
    } else {
        res.status(404).send('image was not found');
    }
};
export default imageController;
