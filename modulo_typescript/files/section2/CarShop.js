"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = CarShop;
