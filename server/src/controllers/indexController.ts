import {Request, Response} from 'express';

class IndexController{
    public index (req:Request, res: Response){
        //res.send('Hello')
        res.json({text: 'APIesta en games'})
    } 
}

export const indexController = new IndexController();