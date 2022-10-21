# Image Processing API - Udacity

## Overview
This API can be used to resize images using Sharp

## Dependencies 
- express
- sharp
- jasmine
- eslint
- nodeman
- prettier
- typescript
- ts-node
- rimraf
- cors

## How to start the server

1. `npm install`
2. `npm run start`
3. Access homepage using http://localhost:3000/api

## Endpoints
- Homepage => http://localhost:3000/api
- Resizing image => http://localhost:3000/api/images?filename=<your-file-name>&width=<desired-width>&height=<desired-height>


## How to use

Add your images in assets/full directory
go to http://localhost:3000/api/images?filename=&width=&height=

Add the following details to the endpoint
- filename=***your image file name here***
- width=***desired width***
- width=***desired height***