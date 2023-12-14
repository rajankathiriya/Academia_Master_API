const express = require("express");
const { studentModel } = require("../models/studentsModel");
const multer = require("multer");
const route = express.Router();
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "C:/Users/BAPS/Desktop/admin panel/adminpanel/src/pages/img/admissionimg"
    );
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "marksheet", maxCount: 1 },
  { name: "adhar", maxCount: 1 },
  { name: "sphoto", maxCount: 1 },
]);

route.post("/", async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) {
        return res
          .status(500)
          .json({ error: err.message || "File upload error" });
      }

      const marksheetFilename = req.files["marksheet"]
        ? req.files["marksheet"][0].filename
        : null;
      const adharFilename = req.files["adhar"]
        ? req.files["adhar"][0].filename
        : null;
      const sphotoFilename = req.files["sphoto"]
        ? req.files["sphoto"][0].filename
        : null;

      const student = await studentModel.create({
        name: req.body.name,
        parentsname: req.body.parentsname,
        studentmobile: req.body.studentmobile,
        parentmobile: req.body.parentmobile,
        email: req.body.email,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        whatsapp: req.body.whatsapp,
        fees: req.body.fees,
        education: req.body.education,
        address: req.body.address,
        city: req.body.city,
        inquirydate: req.body.inquirydate,
        takenby: req.body.takenby,
        course: req.body.course,
        leadsource: req.body.leadsource,
        marksheet: marksheetFilename,
        adhar: adharFilename,
        sphoto: sphotoFilename,
      });

      res.status(201).send(student);
    });
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

// GET all students
route.get("/", async (req, res) => {
  try {
    const students = await studentModel.find();
    res.send(students);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

// GET a specific student by ID
route.get("/:id", async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id);
    if (!student) {
      res.status(404).send("ID not available");
    }
    res.send(student);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

// Update a specific student by ID
route.put("/:id", async (req, res) => {
  try {
    const student = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!student) {
      res.status(404).send("ID not available");
    }
    res.send(student);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

// Delete a specific student by ID
route.delete("/:id", async (req, res) => {
  try {
    const student = await studentModel.findByIdAndRemove(req.params.id);
    if (!student) {
      res.status(404).send("ID not available");
    }
    res.send(student);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

// Delete all students
route.delete("/", async (req, res) => {
  try {
    const result = await studentModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
