import {Request, Response} from 'express';

class IndexController{
    public index (req:Request, res: Response){
        //res.send('Hello')
        res.json({text: 'Esta es la api para la gestión de contadores'})
    } 
    public async listar(req: Request, res: Response) {
        try {

            const result = await pool.query("SHOW SCHEMAS");
            return result;
            console.log(result);
             return res.json({message : "respuesta desde otro metodo"});

            
        } catch (error: any) {
            return res.status(500).json({error: error.message});
        }
    }

    public create(req: Request, res: Response): void { }

    public update(req: Request, res: Response): void { }

    public delete(req: Request, res: Response): void { }
}

export const indexController = new IndexController();


import pool from '../database/database';