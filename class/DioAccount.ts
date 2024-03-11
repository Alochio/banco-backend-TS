export abstract class DioAccount{
    private name: string
    accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name:string): void => {
        this.name = name
        console.log('Nome alterado para: ' + this.name)
    }

    getName = ():string => {
        return this.name
    }

    deposit = (): void => {
        if(this.validadeStatus()){
            console.log(this.name + ' - Deposito realizado!')
        }
        
    }

    withdraw = ():void => {
        console.log(this.name + ' - Saque realizado!')
    }

    getValue = ():void => {
        console.log('Saldo em conta = ' + this.balance)
    }

    private validadeStatus = ():boolean =>{
        if(this.status){
            return this.status            
        } 

        throw new Error('Conta inválida')
    }

}