const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const proposalRouter = require("./routes/proposal");

// Database Connection Import
const connection = require("./db/db");

// Express App Setup
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// DB Connection & Mock Data Insertion
connection();

app.use("/proposal", proposalRouter);

module.exports = app;
