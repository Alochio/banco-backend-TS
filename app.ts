import {PeopleAccount} from './class/PeopleAccount'
import {CompanyAccount} from "./class/CompanyAccount"


const newAccount:PeopleAccount = new PeopleAccount(12345678, 'Vinicius', 1)

const newCompany: CompanyAccount = new CompanyAccount('Empresa', 2)




newAccount.deposit()


