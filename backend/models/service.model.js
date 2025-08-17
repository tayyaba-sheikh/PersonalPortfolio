const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    serviceImage: { type: String }, // icon or image
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;
