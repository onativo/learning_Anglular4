"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import CarShopDAO from "./CarShopDAO";
const CarShop_1 = __importDefault(require("./CarShop"));
const Dao_1 = require("./Dao");
// import PersonDAO from "./PersonDAO";
const Person_1 = __importDefault(require("./Person"));
// let dao: CarShopDAO = new CarShopDAO()
let carshop = new CarShop_1.default('', []);
// dao.inserir(carshop)
// let dao2: PersonDAO = new PersonDAO()
let person = new Person_1.default('', '');
// dao2.inserir(person)
let dao3 = new Dao_1.DAO();
let dao4 = new Dao_1.DAO();
dao3.inserir(carshop);
dao3.remover(5);
