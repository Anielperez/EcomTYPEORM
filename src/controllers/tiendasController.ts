import { Request, Response } from "express";


class TiendasController {
    constructor() {

    }

    consultar(req: Request, res: Response)  {
        try {
            res.send("Consultar tienda")
        } catch(err) {
            if (err instanceof Error)
            res.status(500).send(err.message);
        }
        
    }

    consultarDetalle(req: Request, res: Response){
        const { id } = req.params;
        try {
            res.send("Consultar detalle")
        } catch(err) {
            if (err instanceof Error)
            res.status(500).send(err.message);
        }
    }

    ingresar(req: Request, res: Response) {
        try {
            res.send("Ingresar")
        } catch(err) {
            if (err instanceof Error)
            res.status(500).send(err.message);
        }
    }

    actualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send("Actualizar")
        } catch(err) {
            if (err instanceof Error)
            res.status(500).send(err.message);
        }
    }

    borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            res.send("Borrar")
        } catch(err) {
            if (err instanceof Error)
            res.status(500).send(err.message);
        }
        }

        asociarUsuario(req: Request, res: Response) {
            const { id } = req.params;
            try {
                res.send("Asociar usuario")
            } catch(err) {
                if (err instanceof Error)
                res.status(500).send(err.message);
            }
            }
}

export default new TiendasController();