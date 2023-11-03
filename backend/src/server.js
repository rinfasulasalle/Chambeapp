const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use("/api", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución: http://localhost:${PORT}`);
});
