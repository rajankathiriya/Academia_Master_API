const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  notice: { type: String, required: true },
  noticebig: { type: String, required: true },
  timestampField: { type: Date, default: Date.now }, // Adding a timestamp field
});

const NoticeModel = mongoose.model("notice", noticeSchema);

exports.NoticeModel = NoticeModel;
