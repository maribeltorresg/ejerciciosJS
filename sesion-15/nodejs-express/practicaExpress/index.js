const express = require("express");

const app = express();
const port = 3000;

const suma = 10 + 10;

app.get("/", (req, res) => {
  res.send(`La suma de 10 + 10: ${suma}`);
});

app.get("/about", (req, res) => {
  res.send("Acerca de");
});

app.listen(port, () => {
  console.log(`La suma es: ${suma}`);
});
