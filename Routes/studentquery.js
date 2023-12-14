const express = require("express");
const { StudentQueryModel } = require("../models/studentqueryModel");
const route = express.Router();

route.get("/", async (req, res) => {
  let StudentQuery = await StudentQueryModel.find().sort({
    timestampField: -1,
  });
  res.send(StudentQuery);
});

route.get("/:id", async (req, res) => {
  const StudentQueryID = await StudentQueryModel.findById(req.params.id);
  if (!StudentQueryID) {
    return res.status(404).send("your data not available");
  }
  res.send(StudentQueryID);
});

route.post("/", async (req, res) => {
  let StudentQuery = new StudentQueryModel({
    studentname: req.body.studentname,
    email: req.body.email,
    Phone: req.body.Phone,
    query: req.body.query,
  });
  await StudentQuery.save();
  res.send(StudentQuery);
});

route.put("/:id", async (req, res) => {
  let StudentQueryID = await StudentQueryModel.findByIdAndUpdate(
    req.params.id,
    {
      studentname: req.body.studentname,
      email: req.body.email,
      Phone: req.body.Phone,
      query: req.body.query,
    },
    { new: true }
  );
  if (!StudentQueryID) {
    return res.status(404).send("your data not available");
  }
  res.send(StudentQueryID);
});

route.delete("/:id", async (req, res) => {
  let deleteItem = await StudentQueryModel.findByIdAndRemove(req.params.id);
  if (!deleteItem) {
    return res.status(404).send("your data not available");
  }
  res.send(deleteItem);
});

route.delete("/", async (req, res) => {
  try {
    const result = await StudentQueryModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
