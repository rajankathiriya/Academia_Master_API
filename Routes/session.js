const express = require("express");
const { SessionModel } = require("../models/sessionModel");
const route = express.Router();

route.get("/", async (req, res) => {
  const session = await SessionModel.find();
  res.send(session);
});

route.get("/:id", async (req, res) => {
  const session = await SessionModel.findById(req.params.id);
  if (!session) {
    res.status(400).send("Id not available");
  }
  res.send(session);
});

route.post("/", async (req, res) => {
  const session = new SessionModel({
    session: req.body.session,
  });
  await session.save();
  res.send(session);
});

route.put("/:id", async (req, res) => {
  const session = await SessionModel.findByIdAndUpdate(
    req.params.id,
    {
      session: req.body.session,
    },
    { new: true }
  );
  if (!session) {
    res.status(400).send("ID not available");
  }
  res.send(session);
});

route.delete("/:id", async (req, res) => {
  const session = await SessionModel.findByIdAndRemove(req.params.id);
  if (!session) {
    res.status(400).send("ID not available");
  }
  res.send(session);
});

route.delete("/", async (req, res) => {
  try {
    const result = await SessionModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
