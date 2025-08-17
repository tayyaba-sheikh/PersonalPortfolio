const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(async () => {
            console.log('Connected to MongoDB');

            // Create admin automatically on server start
            // await createAdmin(); // Call the function directly
        })
        .catch(err => console.log('error connecting mongoDB: ', err))
        ;

};

module.exports = connectDB;
