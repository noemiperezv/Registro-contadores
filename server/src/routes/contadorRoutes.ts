import { Router } from 'express';
import contadorController from '../controllers/contadorController';
class ContadorRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', contadorController.list);
        this.router.get('/:id', contadorController.getOne);
        this.router.post('/', contadorController.create);
        this.router.put('/:id', contadorController.update);
        this.router.delete('/:id', contadorController.delete);
    }
}

const contadorRoutes =new ContadorRoutes();
export default contadorRoutes.router;