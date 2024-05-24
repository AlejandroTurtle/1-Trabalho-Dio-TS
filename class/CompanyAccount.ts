import { DioAccount } from "../class/DioAccount"

export class CompanyAccount extends DioAccount {


    constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
    }

    getLoan = (loan: number): void =>{
        if (this.validateStatus()) {
            this.balance = loan + this.balance
            console.log("Você pegou um emprestimo")
            console.log("Seu saldo agora é: ", this.balance)
        }
        
    }
}