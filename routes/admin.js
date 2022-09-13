const express = require("express");

const router = express.Router();

router.get("/add-product", (res, req, next) => {
  res.send("add prod?");
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
});
