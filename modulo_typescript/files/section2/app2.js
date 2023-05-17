"use strict";
class Carro {
    constructor(modelo, portas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.portas = portas;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
let mercedes = new Carro("Benz", 4);
mercedes.acelerar();
mercedes.acelerar();
mercedes.acelerar();
console.log(mercedes);
