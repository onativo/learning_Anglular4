"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Car;
