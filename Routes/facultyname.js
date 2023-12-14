const express = require("express");
const { FacultynameModel } = require("../models/facultynameModel");
const route = express.Router();

route.get("/", async (req, res) => {
  const facultyname = await FacultynameModel.find();
  res.send(facultyname);
});

route.get("/:id", async (req, res) => {
  const facultyname = await FacultynameModel.findById(req.params.id);
  if (!facultyname) {
    res.status(400).send("Id not available");
  }
  res.send(facultyname);
});

route.post("/", async (req, res) => {
  const facultyname = new FacultynameModel({
    facultyname: req.body.facultyname,
  });
  await facultyname.save();
  res.send(facultyname);
});

route.put("/:id", async (req, res) => {
  const facultyname = await FacultynameModel.findByIdAndUpdate(
    req.params.id,
    {
      facultyname: req.body.facultyname,
    },
    { new: true }
  );
  if (!facultyname) {
    res.status(400).send("ID not available");
  }
  res.send(facultyname);
});

route.delete("/:id", async (req, res) => {
  const facultyname = await FacultynameModel.findByIdAndRemove(req.params.id);
  if (!facultyname) {
    res.status(400).send("ID not available");
  }
  res.send(facultyname);
});

route.delete("/", async (req, res) => {
  try {
    const result = await FacultynameModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
