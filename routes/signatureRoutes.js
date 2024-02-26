const express = require("express");
const router = express.Router();
const signatureController = require("../controllers/signatureController");

router.post("/save", signatureController.saveSignature);

module.exports = router;
