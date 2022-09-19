"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //res.send('Hello')
        res.json({ text: 'Esta es la api para la gestión de contadores' });
    }
}
exports.indexController = new IndexController();
