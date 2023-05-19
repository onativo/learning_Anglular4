export default class Car{
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