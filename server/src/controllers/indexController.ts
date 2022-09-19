import {Request, Response} from 'express';

class IndexController{
    public index (req:Request, res: Response){
        //res.send('Hello')
        res.json({text: 'Esta es la api para la gestión de contadores'})
    } 
}

export const indexController = new IndexController();