import {Request, Response} from 'express';
import pool from '../database';

class ContadorController{
    public async list (req:Request, res: Response){
        //res.send('Contadores')
        //pool.query('DESCRIBE tbl_usuario');
        //res.json('listando contadores');
        const contadores = await pool.query('SELECT * FROM tbl_usuario');
        res.json(contadores);
    } 

    public async getOne (req:Request, res:Response): Promise<any>{
        const {id} = req.params;
        //res.json({text:'Este es el contador buscado ' + req.params.id}); 
        const usuario = await pool.query('SELECT * FROM tbl_usuario WHERE cveUsuario = ?', [id]);
        console.log(usuario);
        if(usuario.length > 0){
            return res.json(usuario[0]);
        }else{
            res.status(404).json({text: 'El usuario no existe.'})
        }
        res.json({text: 'Contador encontrado'});
    }

    public async create (req:Request, res:Response): Promise<void> {
        await pool.query('INSERT INTO tbl_usuario set ?', [req.body]);
        console.log(req.body);
        res.json({message:'Contador guardado!!'});

    }

    public async delete (req:Request, res:Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM tbl_usuario WHERE cveUsuario = ?', [id]);
        //res.json({text:'Eliminando un contador ' + req.params.id});
        res.json({message:'El juego fue eliminado' + [id]});
    }

    public async update (req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        //res.json({text:'Actualizando un contador ' + req.params.id});
        await pool.query('UPDATE tbl_usuario SET ? WHERE cveUsuario = ?', [req.body, id]);
        res.json({"message":'Se actualizó el contador.'})
    }
}

const contadorController = new ContadorController();
export default contadorController;