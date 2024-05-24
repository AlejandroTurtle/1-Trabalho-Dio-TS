export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
     balance: number = 0
   private status: boolean = true

    constructor( name: string, accouontNumber: number){
        this.name = name
        this.accountNumber = accouontNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log("Nome alterado com sucesso!")
    }

    getName = (): string =>{
        return this.name
    }

    deposit = (balance: number) => {
        if (balance < 0) {
            console.log("O valor do deposito não pode ser menor que 0")
        } else {
            this.balance = this.balance + balance
            console.log("Você fez um deposito")
            console.log("O seu balanço agora é de: ", this.balance)
        }
       
    }

    withdraw = (withdraw: number): void => {
        if(this.validateStatus() && this.balance > withdraw ) {
            this.balance = this.balance - withdraw 
            console.log("Voce sacou")
            console.log("O seu saldo agora é: ",this.balance)
        } else {
            console.error("Ocorreu um erro, tente novamente")
        }
            
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

     validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error("Conta invalida")
    }
}