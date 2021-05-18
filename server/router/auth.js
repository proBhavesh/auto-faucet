const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const handle = require("../controllers/handle.js");
//home page
router.get("/", handle.homeHandle);

//post route
router.post("/payment", handle.paymentHandle);
//signup
router.post("/signup", handle.signupHandle);

//login

router.post("/login", handle.loginHandle);

module.exports = router;
