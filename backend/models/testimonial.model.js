const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    feedback: { type: String, required: true },
    image: { type: String }, // optional profile image
    designation: { type: String }, // e.g. Client, Teacher, Peer
}, { timestamps: true });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
module.exports = Testimonial;
