"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.send('Contadores')
            //pool.query('DESCRIBE tbl_usuario');
            //res.json('listando contadores');
            const contadores = yield database_1.default.query('SELECT * FROM tbl_usuario');
            res.json(contadores);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //res.json({text:'Este es el contador buscado ' + req.params.id}); 
            const usuario = yield database_1.default.query('SELECT * FROM tbl_usuario WHERE cveUsuario = ?', [id]);
            console.log(usuario);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            else {
                res.status(404).json({ text: 'El usuario no existe.' });
            }
            res.json({ text: 'Contador encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tbl_usuario set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Contador guardado!!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tbl_usuario WHERE cveUsuario = ?', [id]);
            //res.json({text:'Eliminando un contador ' + req.params.id});
            res.json({ message: 'El juego fue eliminado' + [id] });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //res.json({text:'Actualizando un contador ' + req.params.id});
            yield database_1.default.query('UPDATE tbl_usuario SET ? WHERE cveUsuario = ?', [req.body, id]);
            res.json({ "message": 'Se actualizó el contador.' });
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
