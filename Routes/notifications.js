const express = require("express");
const { NotificationsModel } = require("../models/notificationsModel");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const notifications = await NotificationsModel.find()
      .sort({ timestampField: -1 })
      .limit(10);

    res.send(notifications);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

route.get("/:id", async (req, res) => {
  const notification = await NotificationsModel.findById(req.params.id);
  if (!notification) {
    res.status(400).send("Id not available");
  }
  res.send(notification);
});

route.post("/", async (req, res) => {
  const notification = new NotificationsModel({
    name: req.body.name,
    notice: req.body.notice,
  });
  await notification.save();
  res.send(notification);
});

route.put("/:id", async (req, res) => {
  const notification = await NotificationsModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      notice: req.body.notice,
    },
    { new: true }
  );
  if (!notification) {
    res.status(400).send("ID not available");
  }
  res.send(notification);
});

route.delete("/:id", async (req, res) => {
  const notification = await NotificationsModel.findByIdAndRemove(
    req.params.id
  );
  if (!notification) {
    res.status(400).send("ID not available");
  }
  res.send(notification);
});

route.delete("/", async (req, res) => {
  try {
    const result = await NotificationsModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
