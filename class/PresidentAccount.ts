import { DioAccount } from "../class/DioAccount"

export class PresidentAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }



    deposit10 = (balance: number) => {
        if (balance < 0) {
            console.log("O valor do deposito não pode ser menor que 0")
        } else {
            this.balance = balance + 10
            console.log("Seu saldo agora é de: ", this.balance)
        }
    }



}