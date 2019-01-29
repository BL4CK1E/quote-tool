const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

// Database Connection Import
const connection = require("./db/db");

// Redis Connection Import
const { RedisStore } = require("./db/redis");

// Express App Setup
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// DB Connection & Mock Data Insertion
connection();

// Redis Connection
RedisStore;

app.use("/auth", authRouter);
app.use("/user", userRouter);

module.exports = app;
