/* eslint-disable no-unused-vars */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Document Generation Server');
});

module.exports = router;