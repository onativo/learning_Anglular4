// import CarShopDAO from "./CarShopDAO";
import CarShop from "./CarShop";
import { DAO } from "./Dao";
// import PersonDAO from "./PersonDAO";
import Person from "./Person";

// let dao: CarShopDAO = new CarShopDAO()
let carshop = new CarShop('', [])
// dao.inserir(carshop)


// let dao2: PersonDAO = new PersonDAO()
let person: Person = new Person('', '')
// dao2.inserir(person)

let dao3: DAO<CarShop> = new DAO<CarShop>()
let dao4: DAO<Person> = new DAO<Person>()

dao3.inserir(carshop)
dao3.remover(5)