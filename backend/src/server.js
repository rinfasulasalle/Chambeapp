const express = require("express");
const bodyParser = require("body-parser");
const authenticateToken = require("./authenticateToken");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());

// Aplica el middleware de autenticación antes de las rutas
app.use("/api", authenticateToken, routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución: http://localhost:${PORT}`);
});
