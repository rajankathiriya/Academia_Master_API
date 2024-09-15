const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  subteken: { type: String },
  imgurl: { type: String, required: true },
});

const SubjectModel = mongoose.model("subject", subjectSchema);

exports.SubjectModel = SubjectModel;
