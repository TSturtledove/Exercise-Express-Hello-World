"use strict";

module.exports.show = (req, res) =>
  res.render("time", {requestTime: req.requestedTime, test: "boop"});
