const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  session: { type: Number, required: true },
});

const SessionModel = mongoose.model("session", sessionSchema);

exports.SessionModel = SessionModel;
