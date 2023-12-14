const express = require("express");
const { SubjectModel } = require("../models/subjectModel");
const route = express.Router();

route.get("/", async (req, res) => {
  const subname = await SubjectModel.find();
  res.send(subname);
});

route.get("/:id", async (req, res) => {
  const subname = await SubjectModel.findById(req.params.id);
  if (!subname) {
    res.status(400).send("Id not available");
  }
  res.send(subname);
});

route.post("/", async (req, res) => {
  const subname = new SubjectModel({
    subject: req.body.subject,
    subteken: req.body.subteken,
    imgurl: req.body.imgurl,
  });
  await subname.save();
  res.send(subname);
});

route.put("/:id", async (req, res) => {
  const subname = await SubjectModel.findByIdAndUpdate(
    req.params.id,
    {
      subject: req.body.subject,
      subteken: req.body.subteken,
      imgurl: req.body.imgurl,
    },
    { new: true }
  );
  if (!subname) {
    res.status(400).send("ID not available");
  }
  res.send(subname);
});

route.delete("/:id", async (req, res) => {
  const subname = await SubjectModel.findByIdAndRemove(req.params.id);
  if (!subname) {
    res.status(400).send("ID not available");
  }
  res.send(subname);
});

route.delete("/", async (req, res) => {
  try {
    const result = await SubjectModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
