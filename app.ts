class Account{
    name: string
    accountNumber: number

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
}

const newAccount: Account = new Account('Vinicius', 1)
//console.log(newAccount)

const secondAccount: Account = new Account('Penha', 2)
//console.log(secondAccount)

secondAccount.deposit();
newAccount.withdraw();