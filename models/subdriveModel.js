const mongoose = require("mongoose");

const driveSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  drivelink: { type: String, required: true },
  drivename: { type: String, required: true },
  timestampField: { type: Date, default: Date.now }, // Adding a timestamp field
});

const DriveModel = mongoose.model("drive", driveSchema);

exports.DriveModel = DriveModel;
