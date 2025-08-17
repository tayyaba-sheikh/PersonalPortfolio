const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // Frontend, Backend, Database, Tools
    description: { type: String },
    technologyImage: { type: String }, // logo/icon
    level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Intermediate" },
}, { timestamps: true });

const Technology = mongoose.model('Technology', technologySchema);
module.exports = Technology;
