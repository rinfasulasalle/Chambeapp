const express = require("express");
const router = express.Router();
const authenticateToken = require("./authenticateToken");
const userController = require("./userController");

// Middleware de autenticación
router.use((req, res, next) => {
  if (req.path === "/login") {
    return next(); // Salta de autenticación
  }
  authenticateToken(req, res, next);
});

// Rutas protegidas por token
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:userId", userController.getUserById);
router.put("/users/:userId", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);

module.exports = router;
