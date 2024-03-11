import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    getLoan = (valorEmprestimo:number) =>{
        if(this.getStatus()){
            this.setBalance(valorEmprestimo)
            console.log('Emprestimo realizado!')
            this.getValue()
        }
    }
}