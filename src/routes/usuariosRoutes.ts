import express from 'express';
import usuariosController from '../controllers/usuariosController';
const Router = express.Router();


Router.get('/', usuariosController.consultar);


Router.post('/', usuariosController.ingresar);

Router.route("/:id")
    .get(usuariosController.consultarDetalle)
    .put(usuariosController.actualizar)
    .delete(usuariosController.borrar);


export default Router;
