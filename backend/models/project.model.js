const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    projectImage: { type: String }, // URL or filename
    link: { type: String }, // live demo link
    github: { type: String }, // GitHub repo link
    techStack: [{ type: String }], // ["React", "Node", "MongoDB"]
    category: { type: String }, // MERN, React, Node etc.
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
