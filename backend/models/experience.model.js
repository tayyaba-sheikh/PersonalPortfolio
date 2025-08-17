const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true }, // e.g. MERN Course
    description: { type: String },
    year: { type: String, required: true }, // e.g. 2024
}, { timestamps: true });

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
