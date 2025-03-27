import express from 'express';
import ComerciantesController from '../controllers/comerciantesController';
const Router = express.Router();


Router.get('/', ComerciantesController.consultar);


Router.post('/', ComerciantesController.ingresar);

Router.route("/:id")
    .get(ComerciantesController.consultarDetalle)
    .put(ComerciantesController.actualizar)
    .delete(ComerciantesController.borrar);


export default Router;
