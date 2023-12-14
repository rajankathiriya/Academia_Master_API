const mongoose = require("mongoose");

//mongoose ni Schema banavi
const studentquerySchema = new mongoose.Schema({
  studentname: { type: String, required: true },
  email: { type: String, required: true },
  Phone: { type: Number, required: true, maxlength: 10 },
  query: { type: String, required: true },
  timestampField: { type: Date, default: Date.now }, // Adding a timestamp field
});

//mongoose nu model banavyu
const StudentQueryModel = mongoose.model("StudentQuery", studentquerySchema);

exports.StudentQueryModel = StudentQueryModel;
