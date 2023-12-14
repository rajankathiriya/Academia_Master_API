const mongoose = require("mongoose");

const feesSchema = new mongoose.Schema({
  Sname: { type: String, required: true },
  studentmobile: { type: Number, maxlength: 10 },
  email: { type: String, required: true },
  number: { type: Number },
  expiry: { type: Number },
  cvc: { type: Number },
  name: { type: String, required: true },
  totamt: { type: Number },
  feesid: { type: String },
});

const FeesModel = mongoose.model("fees", feesSchema);

exports.FeesModel = FeesModel;
