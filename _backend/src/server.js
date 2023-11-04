const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authenticateToken = require("./authenticateToken");
const routes = require("./routes");

app.use(bodyParser.json());

// Aplica el middleware de autenticación a las rutas protegidas
app.use("/api", authenticateToken, routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución: http://localhost:${PORT}`);
});
