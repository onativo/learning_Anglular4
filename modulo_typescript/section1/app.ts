let mensagem:string = 'oi'
let temporadas:number = 10
let estudandoAngular:boolean = false

let listaFrutas:Array<string> = ['uva', 'maçã', 'goiaba']
//ou outra forma de declarar a mesma variável ↓↓↓↓
let listaFrutas2:string[] = ['uva', 'maçã', 'goiaba']

let notaProavas:Array<number> = [7, 9, 4, 2]
//ou outra forma de declarar a mesma variável ↓↓↓↓
let notaProavas2:number[] = [7, 9, 4, 2]


//Type 'number' is not assignable to type 'String'.
//mensagem = 12
mensagem = 'hello'

//Type 'string' is not assignable to type 'Boolean'.
// estudandoAngular = 'yes'
estudandoAngular = true