"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contadorController_1 = __importDefault(require("../controllers/contadorController"));
class ContadorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', contadorController_1.default.list);
        this.router.get('/:id', contadorController_1.default.getOne);
        this.router.post('/', contadorController_1.default.create);
        this.router.put('/:id', contadorController_1.default.update);
        this.router.delete('/:id', contadorController_1.default.delete);
    }
}
const contadorRoutes = new ContadorRoutes();
exports.default = contadorRoutes.router;
