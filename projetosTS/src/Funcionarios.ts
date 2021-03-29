class Funcionario {
    constructor(public nome:string, public salario: number){

    }

    pagarConta(valor: number): void {
        this.salario = this.salario - valor
        console.log(`conta paga e salario atualizado: ${this.salario}`)
    }

    mostra() {
        console.log(`Nome: ${this.nome} e salário: ${this.salario}`)
    }
}

export {Funcionario}