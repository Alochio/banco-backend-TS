import { DioAccount } from "./DioAccount"

export class GoldAccount extends DioAccount{
 
    constructor(name:string, accountNumber:number ){
        super(name, accountNumber)
    }

    deposit = (valorDeposito: number): void => {
        if (this.getStatus()) {
          this.setBalance(this.setAcrescimo(valorDeposito))
          console.log("Deposito realizado!");
          this.getValue();
        }
      };
    
    setAcrescimo = (valorDeposito:number):number => {
        return valorDeposito + 10
    }

}