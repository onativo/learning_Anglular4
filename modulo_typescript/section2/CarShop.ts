import Car from "./Car"

export default class CarShop{
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