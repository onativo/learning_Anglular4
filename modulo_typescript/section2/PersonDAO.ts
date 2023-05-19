import {DAOInterface} from "./DaoInterface";
import Person from "./Person";

export default class PersonDAO implements DAOInterface{
  nameTable: string = 'tb_carshop'

  inserir(object: Person): boolean{
    console.log('logica insert person')
    return true
  }

  atualizar(object: Person): boolean{
    console.log('logica update person')
    return true
  }

  remover(id: number): Person{
    console.log('logica delete person')
    return new Person('', '')
  }

  selecionar(id: number): Person{
    console.log('logica select person')
    return new Person('', '')
  }

  slecionarTodos(): [any]{
    console.log('logica get all person')
    return [new Person('', '')]
  }
}