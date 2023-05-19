"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const CarShop_1 = __importDefault(require("./CarShop"));
const Person_1 = __importDefault(require("./Person"));
//criando carros
let car1 = new Car_1.default('Puma', 2);
let car2 = new Car_1.default('Civic', 4);
let car3 = new Car_1.default('Brasília', 2);
//adicionando carros à concessionária
let carsList = [car1, car2, car3];
let nativoCarShop = new CarShop_1.default('Rua Direita, 502', carsList);
//teste, imprimindo a lista de carros
//console.log(nativoCarShop.showCars())
//cliente compra carro
let vini = new Person_1.default('Vini', 'Puma');
//verificando se o carro preferido da pessoa está na concessionária
nativoCarShop.showCars().map((car) => {
    if (car['model'] == vini.myPreffCar()) {
        vini.buyCar(car);
        console.log("I just bought a car!!!");
    }
});
console.log(vini.myCar());
