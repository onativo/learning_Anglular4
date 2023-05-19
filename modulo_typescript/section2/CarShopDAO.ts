import {DAOInterface} from "./DaoInterface";
import CarShop from "./CarShop";

export default class CarShopDAO implements DAOInterface{
  nameTable: string = 'tb_carshop'

  inserir(object: CarShop): boolean{
    console.log('logica insert car')
    return true
  }

  atualizar(object: CarShop): boolean{
    console.log('logica update car')
    return true
  }

  remover(id: number): CarShop{
    console.log('logica delete car')
    return new CarShop('', [])
  }

  selecionar(id: number): CarShop{
    console.log('logica select car')
    return new CarShop('', [])
  }

  slecionarTodos(): [any]{
    console.log('logica get all car')
    return [new CarShop('', [])]
  }
}