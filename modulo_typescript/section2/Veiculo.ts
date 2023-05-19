export default class Veiculo{
  protected model: string
  private speed: number = 0


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