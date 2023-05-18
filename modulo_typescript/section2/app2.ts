class Car{
  private model: string
  private doors: number
  private speed: number = 0

  constructor(model: string, doors: number){
    this.model = model
    this.doors = doors
  }

  public hitGas(): void{
    this.speed = this.speed + 10
  }

  public stop(): void{
    this.speed = 0
  }

  public instantSpeed(): number{
    return this.speed
  }
}

class CarShop{
  private address: string
  private cars: Array<Car>

  constructor(address: string, cars: Array<Car>){
    this.address = address
    this.cars = cars
  }

  public showAddress(): string{
    return this.address
  }

  public showCars(): Array<Car>{
    return this.cars
  }

}

class Person{
  private name: string
  private carroPreferido: string
  private car: Car

  constructor(name:string, carroPreferido: string){
    this.name = name
    this.carroPreferido = carroPreferido
  }

  public myName(): string{
    return this.name
  }

  public myPreffCar(): string{
    return this.carroPreferido
  }

  public buyCar(car: Car): void{
    this.car = car
  }

  public myCar(): Car{
    return this.car
  }

}

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