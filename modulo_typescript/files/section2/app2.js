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
        return 'O meu carro preferido: ' + this.carroPreferido;
    }
    buyCar(car) {
        this.car = car;
    }
    myCar() {
        return this.car;
    }
}
