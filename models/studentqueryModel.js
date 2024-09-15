const mongoose = require("mongoose");

//mongoose ni Schema banavi
const studentquerySchema = new mongoose.Schema({
  studentname: { type: String },
  email: { type: String },
  Phone: { type: Number },
  query: { type: String },
  subject: { type: String },
  timestampField: { type: Date, default: Date.now }, // Adding a timestamp field
});

//mongoose nu model banavyu
const StudentQueryModel = mongoose.model("StudentQuery", studentquerySchema);

exports.StudentQueryModel = StudentQueryModel;
