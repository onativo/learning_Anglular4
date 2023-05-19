import Veiculo from "./Veiculo"

export default class Car extends Veiculo{
  private doors: number

  constructor(model: string, doors: number){
    super()
    this.model = model
    this.doors = doors
  }
}