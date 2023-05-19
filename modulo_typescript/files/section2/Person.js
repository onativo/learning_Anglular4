"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Person;
