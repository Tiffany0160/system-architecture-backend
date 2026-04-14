const express = require("express");
const router = express.Router();

const { getData } = require("../controllers/mainController");

router.get("/data", getData);

module.exports = router;
