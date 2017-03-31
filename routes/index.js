"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./time"));
router.use(require("./root"));

module.exports = router;
