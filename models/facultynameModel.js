const mongoose = require("mongoose");

const facultynameSchema = new mongoose.Schema({
  facultyname: { type: String, required: true },
});

const FacultynameModel = mongoose.model("facultyname", facultynameSchema);

exports.FacultynameModel = FacultynameModel;
