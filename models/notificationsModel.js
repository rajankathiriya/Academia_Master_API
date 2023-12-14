const mongoose = require("mongoose");

const notificationsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  notice: { type: String, required: true },
  timestampField: { type: Date, default: Date.now }, // Adding a timestamp field
});

const NotificationsModel = mongoose.model("notifications", notificationsSchema);

exports.NotificationsModel = NotificationsModel;
