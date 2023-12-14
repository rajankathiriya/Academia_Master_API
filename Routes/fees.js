const express = require("express");
const { FeesModel } = require("../models/feesModel");
const route = express.Router();

route.get("/", async (req, res) => {
  const fees = await FeesModel.find();
  res.send(fees);
});

route.get("/:feesid", async (req, res) => {
  const fees = await FeesModel.findById(req.params.feesid);
  if (!fees) {
    res.status(400).send("Id not available");
  }
  res.send(fees);
});

route.post("/", async (req, res) => {
  const fees = new FeesModel({
    Sname: req.body.Sname,
    studentmobile: req.body.studentmobile,
    email: req.body.email,
    number: req.body.number,
    expiry: req.body.expiry,
    cvc: req.body.cvc,
    name: req.body.name,
    totamt: req.body.totamt,
    feesid: req.body.feesid,
  });
  await fees.save();
  res.send(fees);
});

route.put("/:id", async (req, res) => {
  const fees = await FeesModel.findByIdAndUpdate(
    req.params.id,
    {
      Sname: req.body.Sname,
      studentmobile: req.body.studentmobile,
      email: req.body.email,
      number: req.body.number,
      expiry: req.body.expiry,
      cvc: req.body.cvc,
      name: req.body.name,
      totamt: req.body.totamt,
    },
    { new: true }
  );
  if (!fees) {
    res.status(400).send("ID not available");
  }
  res.send(fees);
});

route.delete("/:id", async (req, res) => {
  const fees = await FeesModel.findByIdAndRemove(req.params.id);
  if (!fees) {
    res.status(400).send("ID not available");
  }
  res.send(fees);
});

route.delete("/", async (req, res) => {
  try {
    const result = await FeesModel.deleteMany();
    res.send(result);
  } catch (err) {
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

module.exports = route;
