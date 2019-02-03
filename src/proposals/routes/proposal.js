const express = require("express");
const router = express.Router();

const authUser = require("../controller/auth/authoriseUser");
const deauthoriseUser = require("../controller/auth/deauthoriseUser");

// Login Route
router.post("/login", async (req, res, next) => {
  const dbresponse = await authUser(req.body);
  res.json(dbresponse);
});

// Logout Route
router.post("/logout", (req, res, next) => {
  const dbresponse = deauthoriseUser();
  res.json(dbresponse);
});

module.exports = router;
