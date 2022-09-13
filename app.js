const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (res, req) => {
  res.write("hello");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
