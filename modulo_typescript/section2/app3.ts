import Car from "./Car";
import CarShop from "./CarShop";
import Moto from "./Moto";

let honda = new Car('civic', 4)

let suzuki = new Moto()
suzuki.hitGas()

//console.log(suzuki)
//console.log(honda)


let nativoCarShop = new CarShop('', [])

console.log(nativoCarShop.openHours())