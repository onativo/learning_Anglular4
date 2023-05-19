import Car from "./Car"

export default class Person{
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