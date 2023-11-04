const express = require("express");
const router = express.Router();
const authenticateToken = require("./authenticateToken");
const userController = require("./userController");

router.use(authenticateToken); // Aplica el middleware de autenticación a todas las rutas siguientes

// Rutas protegidas por token
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:userId", userController.getUserById);
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);

module.exports = router;
