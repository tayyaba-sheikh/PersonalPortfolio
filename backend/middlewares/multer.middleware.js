const multer = require("multer");

// Configure storage for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp');  // Set the destination folder for uploads
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);  // Use the original name of the file
    }
});

// Create the upload middleware with the storage configuration
const upload = multer({ storage });

module.exports = { upload };  // Export as an object
