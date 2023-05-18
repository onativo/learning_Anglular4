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
  private cars: any

  constructor(address: string, cars: any){
    this.address = address
    this.cars = cars
  }

  public showAddress(): string{
    return this.address
  }

  public showCars(): any{
    return this.cars
  }

}

class Person{
  private name: string
  private carroPreferido: string
  private car: any

  constructor(name:string, carroPreferido: string){
    this.name = name
    this.carroPreferido = carroPreferido
  }

  public myName(): string{
    return this.name
  }

  public myPreffCar(): string{
    return 'O meu carro preferido: ' + this.carroPreferido
  }

  public buyCar(car: any): void{
    this.car = car
  }

  public myCar(): any{
    return this.car
  }

}
