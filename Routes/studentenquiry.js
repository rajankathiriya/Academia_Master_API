const express = require("express");
const { StudentEnquiryModel } = require("../models/studentenquiryModel");
const route = express.Router();

route.get("/", async (req, res) => {
  let StudentEnquiry = await StudentEnquiryModel.find().sort({
    timestampField: -1,
  });
  res.send(StudentEnquiry);
});

route.get("/:id", async (req, res) => {
  const StudentEnquiryID = await StudentEnquiryModel.findById(req.params.id);
  if (!StudentEnquiryID) {
    return res.status(404).send("your data not available");
  }
  res.send(StudentEnquiryID);
});

route.post("/", async (req, res) => {
  let StudentEnquiry = new StudentEnquiryModel({
    studentname: req.body.studentname,
    email: req.body.email,
    Phone: req.body.Phone,
    subject: req.body.subject,
    query: req.body.query,
  });
  await StudentEnquiry.save();
  res.send(StudentEnquiry);
});

route.put("/:id", async (req, res) => {
  let StudentEnquiryID = await StudentEnquiryModel.findByIdAndUpdate(
    req.params.id,
    {
      studentname: req.body.studentname,
      email: req.body.email,
      Phone: req.body.Phone,
      subject: req.body.subject,
      query: req.body.query,
    },
    { new: true }
  );
  if (!StudentEnquiryID) {
    return res.status(404).send("your data not available");
  }
  res.send(StudentEnquiryID);
});

route.delete("/:id", async (req, res) => {
  let deleteItem = await StudentEnquiryModel.findByIdAndRemove(req.params.id);
  if (!deleteItem) {
    return res.status(404).send("your data not available");
  }
  res.send(deleteItem);
});

route.delete("/", async (req, res) => {
  try {
    const result = await StudentEnquiryModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
