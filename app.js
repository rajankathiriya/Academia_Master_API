const express = require("express");

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

const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors({ origin: true }));

mongoose
  .connect("mongodb://127.0.0.1/CourseData")
  .then(() => console.log("database connection successfuly"))
  .catch((err) => console.error("connection faild", err));

app.use(express.json());

app.use("/api/studentquery", studentquery);
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

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`app runing on port ${port}`));
