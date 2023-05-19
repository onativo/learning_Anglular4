"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor() {
        this.speed = 0;
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
exports.default = Veiculo;
