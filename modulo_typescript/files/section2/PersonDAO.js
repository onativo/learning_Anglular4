"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class PersonDAO {
    constructor() {
        this.nameTable = 'tb_carshop';
    }
    inserir(object) {
        console.log('logica insert person');
        return true;
    }
    atualizar(object) {
        console.log('logica update person');
        return true;
    }
    remover(id) {
        console.log('logica delete person');
        return new Person_1.default('', '');
    }
    selecionar(id) {
        console.log('logica select person');
        return new Person_1.default('', '');
    }
    slecionarTodos() {
        console.log('logica get all person');
        return [new Person_1.default('', '')];
    }
}
exports.default = PersonDAO;
