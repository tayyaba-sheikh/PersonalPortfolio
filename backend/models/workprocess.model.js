const WorkProcessSchema = new mongoose.Schema({
    stepNumber: { type: Number, required: true },
    title: { type: String, required: true }, // e.g. "Discuss"
    description: { type: String }
});
