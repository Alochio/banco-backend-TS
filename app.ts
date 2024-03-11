abstract class Account{
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log(this.name + ' - Deposito realizado!')
    }

    withdraw = () => {
        console.log(this.name + ' - Saque realizado!')
    }

    getValue = () => {
        console.log('Saldo em conta = ' + this.balance)
    }

}

class PeopleAccount extends Account{
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber:number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}

const newAccount:PeopleAccount = new PeopleAccount(12345678, 'Vinicius', 1)
console.log(newAccount)