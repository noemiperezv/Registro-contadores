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
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //res.send('Hello')
        res.json({ text: 'Esta es la api para la gestión de contadores' });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query("SHOW SCHEMAS");
                return result;
                console.log(result);
                return res.json({ message: "respuesta desde otro metodo" });
            }
            catch (error) {
                return res.status(500).json({ error: error.message });
            }
        });
    }
    create(req, res) { }
    update(req, res) { }
    delete(req, res) { }
}
exports.indexController = new IndexController();
const database_1 = __importDefault(require("../database/database"));
