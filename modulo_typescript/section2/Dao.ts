import { DAOInterface } from "./DaoInterface"

export class DAO<T> implements DAOInterface<T>{
  nameTable: string = ''

  inserir(object: T): boolean{
    console.log('logica insert')
    return true
  }

  atualizar(object: T): boolean{
    console.log('logica update')
    return true
  }

  remover(id: number): T{
    console.log('logica delete')
    return Object()
  }

  selecionar(id: number): T{
    console.log('logica select')
    return Object()
  }

  slecionarTodos(): [T]{
    console.log('logica get all')
    return [Object()]
  }
}