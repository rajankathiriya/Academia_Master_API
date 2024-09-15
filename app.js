const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentquery = require("./Routes/studentquery");
const Studentenquiry = require("./Routes/studentenquiry");
const student = require("./Routes/students");
const fees = require("./Routes/fees");
const facultyname = require("./Routes/facultyname");
const subject = require("./Routes/subject");
const notifications = require("./Routes/notifications");
const session = require("./Routes/session");
const subnotice = require("./Routes/subnotice");
const subdrive = require("./Routes/subdrive");
const subassignment = require("./Routes/subassignment");

const app = express();

app.use(cors());

mongoose
  .connect("mongodb+srv://rkofficial2512:rkofficial2512@cluster0.34yo9.mongodb.net/academiadata")
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error("Connection failed", err));

app.use(express.json());

// Define your API routes
app.use("/api/studentquery/", studentquery);
app.use("/api/studentenquiry", Studentenquiry);
app.use("/api/students", student);
app.use("/api/fees", fees);
app.use("/api/facultyname", facultyname);
app.use("/api/subject", subject);
app.use("/api/notifications", notifications);
app.use("/api/session", session);
app.use("/api/subnotice", subnotice);
app.use("/api/subdrive", subdrive);
app.use("/api/subassignment", subassignment);

const port = 8080;

app.listen(port, () => console.log(`App running on port ${port}`));
