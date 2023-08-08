const express = require("express");
const router = express.Router();
const { requiredScopes } = require("express-oauth2-jwt-bearer");
const usuarioController = require("../controllers/usuarioController");

// Ruta para obtener todos los usuarios (requiere el scope "read:usuarios")
router.get(
    "/",
    requiredScopes("read:usuarios"),
    usuarioController.getAllUsuarios
);

// Ruta para obtener un usuario por ID (requiere el scope "read:usuarios")
router.get(
    "/:id",
    requiredScopes("read:usuarios"),
    usuarioController.getUsuarioById
);

// Ruta para crear un nuevo usuario (requiere el scope "write:usuarios")
router.post(
    "/",
    requiredScopes("write:usuarios"),
    usuarioController.createUsuario
);

// Ruta para actualizar un usuario existente (requiere el scope "write:usuarios")
router.put(
    "/:id",
    requiredScopes("write:usuarios"),
    usuarioController.updateUsuario
);

// Ruta para eliminar un usuario (requiere el scope "write:usuarios")
router.delete(
    "/:id",
    requiredScopes("write:usuarios"),
    usuarioController.deleteUsuario
);

module.exports = router;
