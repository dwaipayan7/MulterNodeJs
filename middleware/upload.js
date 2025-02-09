import multer, { memoryStorage } from "multer";
import path from "path";
import fs from "fs";

// Define the upload folder
const uploadFolder = path.resolve("uploads");

// Ensure the folder exists
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder, { recursive: true });
}

// Multer Storage Configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadFolder); 
//     },
//     filename: (req, file, cb) => {
//         const suffix = Date.now();
//         const fileName = suffix + "-" + file.originalname;
//         cb(null, fileName);
//     }
// });


const storage = memoryStorage();

const upload = multer({ storage });

export default upload;
