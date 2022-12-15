const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/users", (req, res) => {
  res.json([
    { nombre: "Javier", apellido: "Pacheco", correo: "javier@mail.com" },
    { nombre: "Andres", apellido: "Polanco", correo: "andres@mail.com" },
    { nombre: "Julian", apellido: "Mattos", correo: "julian@mail.com" },
    { nombre: "Andrea", apellido: "Sarmiento", correo: "andrea@mail.com" },
    { nombre: "Jazmin", apellido: "Gonzales", correo: "jazmin@mail.com" },
  ]);
});

app.listen("3000", () => {
  console.log(`Se esta ejecutando en el puerto ${3000}`);
});
