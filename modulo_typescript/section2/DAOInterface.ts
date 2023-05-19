export interface DAOInterface{
  nameTable: string

  inserir(object:any): boolean
  atualizar(object: any): boolean
  remover(id: number): any
  selecionar(id: number): any
  slecionarTodos(): [any]
}