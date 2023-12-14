const mongoose = require("mongoose");

//mongoose ni Schema banavi
const studentenquirySchema = new mongoose.Schema({
  studentname: { type: String, required: true },
  email: { type: String, required: true },
  Phone: { type: Number, required: true, maxlength: 10 },
  subject: { type: String, required: true },
  query: { type: String, required: true },
  timestampField: { type: Date, default: Date.now }, // Adding a timestamp field
});

//mongoose nu model banavyu
const StudentEnquiryModel = mongoose.model(
  "StudentEnquiry",
  studentenquirySchema
);

exports.StudentEnquiryModel = StudentEnquiryModel;
