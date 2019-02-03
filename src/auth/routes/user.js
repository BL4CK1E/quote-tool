const express = require("express");
const router = express.Router();

const findUser = require("../controller/user/findUser");
const createUser = require("../controller/user/createUser");

// Find User
router.get("/find", async (req, res, next) => {
  const dbresponse = await findUser(req.query.user);
  res.json(dbresponse);
});

// Create User
router.post("/create", async (req, res, next) => {
  const dbresponse = await createUser(req.body);
  res.json(dbresponse);
});

module.exports = router;
