import Car from "./Car"
import { CarShopInterface } from "./CarShopInterface"

export default class CarShop implements CarShopInterface{
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
  
  public openHours(): string {
    return "Segunda à Setxa, das 08:00 às 18:00"
  }
}