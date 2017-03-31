"use strict"

require("dotenv").config();
// const {Router}= require("express");
// const router = Router();
const express = require("express");
const app = express();

const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
}

app.use(express.static("/public"));
app.use(requestTime)
app.use(routes)

// app.get("/", (req, res, next) => {
//   res.render("expresshelloworld");
// });

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
});
