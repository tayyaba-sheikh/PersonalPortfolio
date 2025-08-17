const mongoose = require("mongoose");

const indicatorSchema = new mongoose.Schema({
    label: { type: String, required: true }, // e.g. "Projects Completed"
    value: { type: Number, required: true }, // e.g. 20
}, { timestamps: true });

const Indicator = mongoose.model('Indicator', indicatorSchema);
module.exports = Indicator;
