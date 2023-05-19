"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarShop_1 = __importDefault(require("./CarShop"));
class CarShopDAO {
    constructor() {
        this.nameTable = 'tb_carshop';
    }
    inserir(object) {
        console.log('logica insert car');
        return true;
    }
    atualizar(object) {
        console.log('logica update car');
        return true;
    }
    remover(id) {
        console.log('logica delete car');
        return new CarShop_1.default('', []);
    }
    selecionar(id) {
        console.log('logica select car');
        return new CarShop_1.default('', []);
    }
    slecionarTodos() {
        console.log('logica get all car');
        return [new CarShop_1.default('', [])];
    }
}
exports.default = CarShopDAO;
