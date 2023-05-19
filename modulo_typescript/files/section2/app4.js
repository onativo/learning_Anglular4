"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarShopDAO_1 = __importDefault(require("./CarShopDAO"));
const CarShop_1 = __importDefault(require("./CarShop"));
const PersonDAO_1 = __importDefault(require("./PersonDAO"));
const Person_1 = __importDefault(require("./Person"));
let dao = new CarShopDAO_1.default();
let carshop = new CarShop_1.default('', []);
dao.inserir(carshop);
let dao2 = new PersonDAO_1.default();
let person = new Person_1.default('', '');
dao2.inserir(person);
