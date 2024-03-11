export abstract class DioAccount {
  private name: string;
  readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado para: " + this.name);
  };

  getName = (): string => {
    return this.name;
  };

  setBalance = (valorEntrada:number):number => {
    this.balance = valorEntrada + this.balance
    return this.balance
  }

  deposit = (valorDeposito: number): void => {
    if (this.validadeStatus()) {
      this.setBalance(valorDeposito)
      console.log("Deposito realizado!");
      this.getValue();
    }
  };

  withdraw = (valorSaque: number): void => {
    if (this.validadeStatus() && this.getStatusSaldo(valorSaque)) {
      console.log("Saque realizado!");
      this.balance = this.balance - valorSaque;
      this.getValue();
    } else {
      throw new Error("Não há este saldo em conta.");
    }
  };

  getValue = (): void => {
    console.log(this.getName() + ": Valor atual em conta: " + this.balance);
  };

  getStatusSaldo = (valorSaque: number): boolean => {
    if (valorSaque < this.balance || valorSaque === this.balance) {
      return true;
    } else {
      return false;
    }
  };

  private validadeStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  getStatus = ():boolean => {
    return this.status
  }
}
