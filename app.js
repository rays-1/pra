const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
