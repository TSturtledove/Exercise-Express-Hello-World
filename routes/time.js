"use strict";

const { Router } = require("express");
const { show } = require("../controllers/time");

const router = Router();

router.get("/time", show)

module.exports = router;
