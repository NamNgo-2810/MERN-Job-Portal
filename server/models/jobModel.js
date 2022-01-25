const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: { type: String, required: true },
    minBudget: { type: Number, required: true },
    maxBudget: { type: Number, required: true },
    experience: { type: String, required: true },
    smallDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    minimumQualification: { type: String, required: false },
    skillsRequired: { type: [], required: true },
    hirer: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    hirerDescription: { type: String, required: false },
    appliedCandidatesIds: { type: [] },
    postedBy: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const jobModel = new mongoose.model("Job", jobSchema);
module.exports = jobModel;
