import multer from 'multer';

// Configure multer to store file data in memory
const storage = multer.memoryStorage();
export const uploadFile = multer({ storage: storage });
