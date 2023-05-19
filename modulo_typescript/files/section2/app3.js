"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const CarShop_1 = __importDefault(require("./CarShop"));
const Moto_1 = __importDefault(require("./Moto"));
let honda = new Car_1.default('civic', 4);
let suzuki = new Moto_1.default();
suzuki.hitGas();
//console.log(suzuki)
//console.log(honda)
let nativoCarShop = new CarShop_1.default('', []);
console.log(nativoCarShop.openHours());
