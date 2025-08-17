const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
    plan: { type: String, required: true, enum: ["Standard", "Premium"] },
    price: { type: Number, required: true },
    features: [{ type: String }], // list of features
}, { timestamps: true });

const Pricing = mongoose.model('Pricing', pricingSchema);
module.exports = Pricing;
