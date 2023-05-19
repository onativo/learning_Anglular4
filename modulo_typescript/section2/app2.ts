import Car from "./Car"
import CarShop from "./CarShop"
import Person from "./Person"

//criando carros
let car1 = new Car('Puma', 2)
let car2 = new Car('Civic', 4)
let car3 = new Car('Brasília', 2)

//adicionando carros à concessionária
let carsList: Car[] = [car1, car2, car3]
let nativoCarShop = new CarShop('Rua Direita, 502', carsList)

//teste, imprimindo a lista de carros
//console.log(nativoCarShop.showCars())

//cliente compra carro
let vini = new Person('Vini', 'Puma')

//verificando se o carro preferido da pessoa está na concessionária
nativoCarShop.showCars().map((car: Car) => {
  if(car['model'] == vini.myPreffCar()){
    vini.buyCar(car)
    console.log("I just bought a car!!!")
  }
})

console.log(vini.myCar())