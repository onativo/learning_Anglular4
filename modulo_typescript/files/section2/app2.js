"use strict";
class Car {
    constructor(model, doors) {
        this.speed = 0;
        this.model = model;
        this.doors = doors;
    }
    hitGas() {
        this.speed = this.speed + 10;
    }
    stop() {
        this.speed = 0;
    }
    instantSpeed() {
        return this.speed;
    }
}
class CarShop {
    constructor(address, cars) {
        this.address = address;
        this.cars = cars;
    }
    showAddress() {
        return this.address;
    }
    showCars() {
        return this.cars;
    }
}
class Person {
    constructor(name, carroPreferido) {
        this.name = name;
        this.carroPreferido = carroPreferido;
    }
    myName() {
        return this.name;
    }
    myPreffCar() {
        return this.carroPreferido;
    }
    buyCar(car) {
        this.car = car;
    }
    myCar() {
        return this.car;
    }
}
//criando carros
let car1 = new Car('Puma', 2);
let car2 = new Car('Civic', 4);
let car3 = new Car('Brasília', 2);
//adicionando carros à concessionária
let carsList = [car1, car2, car3];
let nativoCarShop = new CarShop('Rua Direita, 502', carsList);
//teste, imprimindo a lista de carros
//console.log(nativoCarShop.showCars())
//cliente compra carro
let vini = new Person('Vini', 'Puma');
//verificando se o carro preferido da pessoa está na concessionária
nativoCarShop.showCars().map((car) => {
    if (car['model'] == vini.myPreffCar()) {
        vini.buyCar(car);
        console.log("I just bought a car!!!");
    }
});
console.log(vini.myCar());
