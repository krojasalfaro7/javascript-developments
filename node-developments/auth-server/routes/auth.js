const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, revalidarToken, crearProducto, editarProducto, eliminarProducto } = require('../controllers/auth');
const { login } = require('../controllers/auth');


const router = Router();

// API 
// Crear usuario
router.post('/new', crearUsuario);

router.post('/crear-producto', crearProducto);
router.post('/editar-producto', editarProducto);
router.post('/borrar-producto', eliminarProducto);

// Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La clave debe ser obligatoria y/o tener un minimo de caracteres de 6').isLength({ min: 6 })
],login);

// Login de usuario
router.get('/renew', revalidarToken);


module.exports = router;