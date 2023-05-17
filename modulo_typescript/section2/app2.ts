class Carro{
  private modelo: string
  private portas: number
  private velocidade: number = 0

  constructor(modelo: string, portas: number){
    this.modelo = modelo
    this.portas = portas
  }

  public acelerar(): void{
    this.velocidade = this.velocidade + 10
  }

  public parar(): void{
    this.velocidade = 0
  }

  public velocidadeAtual(): number{
    return this.velocidade
  }
}

let mercedes = new Carro("Benz", 4)
mercedes.acelerar()
mercedes.acelerar()
mercedes.acelerar()
console.log(mercedes)