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
    openHours() {
        return "Segunda à Setxa, das 08:00 às 18:00";
    }
}
exports.default = CarShop;
