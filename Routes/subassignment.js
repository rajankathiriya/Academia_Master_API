const express = require("express");
const { AssignmentModel } = require("../models/subassignmentModel");
const multer = require("multer");
const route = express.Router();
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "C:/Users/BAPS/Desktop/academia/student panel/src/pages/img/asspdf"
    );
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

route.post("/", upload.single("asspdf"), async (req, res) => {
  const assignment = new AssignmentModel({
    subject: req.body.subject,
    description: req.body.description,
    assbig: req.body.assbig,
    asspdf: req.file.filename,
    duedate: req.body.duedate,
  });
  await assignment.save();
  res.send(assignment);
  console.log(req.file);
});

route.get("/", async (req, res) => {
  const assignment = await AssignmentModel.find().sort({ timestampField: -1 });
  res.send(assignment);
});

route.get("/:id", async (req, res) => {
  const assignment = await AssignmentModel.findById(req.params.id);
  if (!assignment) {
    res.status(400).send("Id not available");
  }
  res.send(assignment);
});

route.put("/:id", async (req, res) => {
  const assignment = await AssignmentModel.findByIdAndUpdate(
    req.params.id,
    {
      subject: req.body.subject,
      description: req.body.description,
      assbig: req.body.assbig,
      duedate: req.body.duedate,
    },
    { new: true }
  );
  if (!assignment) {
    res.status(400).send("ID not available");
  }
  res.send(assignment);
});

route.delete("/:id", async (req, res) => {
  const assignment = await AssignmentModel.findByIdAndRemove(req.params.id);
  if (!assignment) {
    res.status(400).send("ID not available");
  }
  res.send(assignment);
});

route.delete("/", async (req, res) => {
  const assignment = await AssignmentModel.deleteMany();
  res.send(assignment);
});

module.exports = route;
