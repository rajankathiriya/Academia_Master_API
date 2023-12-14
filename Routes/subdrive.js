const express = require("express");
const { DriveModel } = require("../models/subdriveModel");
const route = express.Router();

route.get("/", async (req, res) => {
  const drive = await DriveModel.find().sort({ timestampField: -1 });
  res.send(drive);
});

route.get("/:id", async (req, res) => {
  const drive = await DriveModel.findById(req.params.id);
  if (!drive) {
    res.status(400).send("Id not available");
  }
  res.send(drive);
});

route.post("/", async (req, res) => {
  const drive = new DriveModel({
    subject: req.body.subject,
    drivelink: req.body.drivelink,
    drivename: req.body.drivename,
  });
  await drive.save();
  res.send(drive);
});

route.put("/:id", async (req, res) => {
  const drive = await DriveModel.findByIdAndUpdate(
    req.params.id,
    {
      subject: req.body.subject,
      drivelink: req.body.drivelink,
      drivename: req.body.drivename,
    },
    { new: true }
  );
  if (!drive) {
    res.status(400).send("ID not available");
  }
  res.send(drive);
});

route.delete("/:id", async (req, res) => {
  const drive = await DriveModel.findByIdAndRemove(req.params.id);
  if (!drive) {
    res.status(400).send("ID not available");
  }
  res.send(drive);
});

route.delete("/", async (req, res) => {
  try {
    const result = await DriveModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
