import express from 'express';
import tiendasController from '../controllers/tiendasController';
const Router = express.Router();


Router.get('/', tiendasController.consultar);


Router.post('/', tiendasController.ingresar);
Router.post('/registraUsuario', tiendasController.asociarUsuario);

Router.route("/:id")
    .get(tiendasController.consultarDetalle)
    .put(tiendasController.actualizar)
    .delete(tiendasController.borrar);


export default Router;
