import CarShopDAO from "./CarShopDAO";
import CarShop from "./CarShop";
import PersonDAO from "./PersonDAO";
import Person from "./Person";

let dao: CarShopDAO = new CarShopDAO()
let carshop = new CarShop('', [])
dao.inserir(carshop)


let dao2: PersonDAO = new PersonDAO()
let person: Person = new Person('', '')
dao2.inserir(person)