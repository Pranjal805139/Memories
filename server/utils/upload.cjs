
// import multer from 'multer';
// import { GridFsStorage } from 'multer-gridfs-storage';
// import dotenv from 'dotenv';
// import { request } from 'express';

// dotenv.config();

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// const storage = new GridFsStorage({
//     url: `mongodb://${username}:${password}@ac-shxecgw-shard-00-00.voevint.mongodb.net:27017,ac-shxecgw-shard-00-01.voevint.mongodb.net:27017,ac-shxecgw-shard-00-02.voevint.mongodb.net:27017/?ssl=true&replicaSet=atlas-c10w1a-shard-0&authSource=admin&retryWrites=true&w=majority`,
//     options: { useNewUrlParser: true },
//     file: (request, file) => {
//         const match = ["image/png" , "image/jpg"];

//         if(match.indexOf(file.memeType) === -1) {
//             return `${Date.now()}-blog-${file.originalname}`;
//         }

//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-blog-${file.originalname}`
//         }
//     }
// })

// export default multer({ storage });

// ----------------------------------------------------------------------------------------------------------------------

// import multer from 'multer';
// import GridFsStorage from 'multer-gridfs-storage';
// import dotenv from 'dotenv';
// import { request } from 'express';

// dotenv.config();

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// const storage = new GridFsStorage({
//   url: `mongodb://${username}:${password}@ac-shxecgw-shard-00-00.voevint.mongodb.net:27017,ac-shxecgw-shard-00-01.voevint.mongodb.net:27017,ac-shxecgw-shard-00-02.voevint.mongodb.net:27017/?ssl=true&replicaSet=atlas-c10w1a-shard-0&authSource=admin&retryWrites=true&w=majority`,
//   options: { useNewUrlParser: true },
//   file: (request, file) => {
//     const match = ["image/png", "image/jpg"];

//     if (match.indexOf(file.mimetype) === -1) {
//       return `${Date.now()}-blog-${file.originalname}`;
//     }

//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-blog-${file.originalname}`
//     };
//   }
// });

// const upload = multer({ storage });

// export default upload;

// ---------------------------------------------------------------------------------------------------------------------------------------

// import multer from 'multer';
// import GridFsStorage from 'multer-gridfs-storage';
// import { gridfsStorage } from 'multer-gridfs-storage';
// const {gridfsStorage } = require('multer-gridfs-storage');


// import dotenv from 'dotenv';
// import { request } from 'express';


const multer = require('multer');
const multerGridFsStorage = require('multer-gridfs-storage');
const dotenv = require('dotenv');
const { request } = require('express');

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// const storage = new GridFsStorage({
const storage = new multerGridFsStorage.GridFsStorage({
  url: `mongodb://${username}:${password}@ac-shxecgw-shard-00-00.voevint.mongodb.net:27017,ac-shxecgw-shard-00-01.voevint.mongodb.net:27017,ac-shxecgw-shard-00-02.voevint.mongodb.net:27017/?ssl=true&replicaSet=atlas-c10w1a-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`
    };
  }
});

// const upload = multer({ storage });

// export default upload;

const upload = multer({ storage });

module.exports = upload;
