"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAO = void 0;
class DAO {
    constructor() {
        this.nameTable = '';
    }
    inserir(object) {
        console.log('logica insert');
        return true;
    }
    atualizar(object) {
        console.log('logica update');
        return true;
    }
    remover(id) {
        console.log('logica delete');
        return Object();
    }
    selecionar(id) {
        console.log('logica select');
        return Object();
    }
    slecionarTodos() {
        console.log('logica get all');
        return [Object()];
    }
}
exports.DAO = DAO;
