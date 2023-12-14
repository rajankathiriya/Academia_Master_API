const express = require("express");
const { NoticeModel } = require("../models/subnoticeModel");
const route = express.Router();

route.get("/", async (req, res) => {
  const notice = await NoticeModel.find().sort({ timestampField: -1 });
  res.send(notice);
});

route.get("/:id", async (req, res) => {
  const notice = await NoticeModel.findById(req.params.id);
  if (!notice) {
    res.status(400).send("Id not available");
  }
  res.send(notice);
});

route.post("/", async (req, res) => {
  const notice = new NoticeModel({
    subject: req.body.subject,
    notice: req.body.notice,
    noticebig: req.body.noticebig,
  });
  await notice.save();
  res.send(notice);
});

route.put("/:id", async (req, res) => {
  const notice = await NoticeModel.findByIdAndUpdate(
    req.params.id,
    {
      subject: req.body.subject,
      notice: req.body.notice,
      noticebig: req.body.noticebig,
    },
    { new: true }
  );
  if (!notice) {
    res.status(400).send("ID not available");
  }
  res.send(notice);
});

route.delete("/:id", async (req, res) => {
  const notice = await NoticeModel.findByIdAndRemove(req.params.id);
  if (!notice) {
    res.status(400).send("ID not available");
  }
  res.send(notice);
});

route.delete("/", async (req, res) => {
  try {
    const result = await NoticeModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
