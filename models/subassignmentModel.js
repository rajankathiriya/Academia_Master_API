const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  subject: { type: String, require: true },
  description: { type: String, require: true },
  assbig: { type: String, require: true },
  duedate: { type: String, require: true },
  asspdf: { type: String, require: true },
  timestampField: { type: Date, default: Date.now }, // Adding a timestamp field
});

const AssignmentModel = mongoose.model("assignment", assignmentSchema);

exports.AssignmentModel = AssignmentModel;
