import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from "./class/CompanyAccount"


const pessoa01: PeopleAccount = new PeopleAccount(12345678, 'Vinicius Alochio', 1)
//pessoa01.deposit(120)
//pessoa01.withdraw(12)






const empresa01: CompanyAccount = new CompanyAccount('Empresa', 2)
empresa01.deposit(155)
empresa01.withdraw(101)
empresa01.getLoan(1000)




