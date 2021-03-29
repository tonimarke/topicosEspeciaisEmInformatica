import {Funcionario} from "./Funcionarios"

// classe gerente vai herdar de funcionário
class Gerente extends Funcionario {
    constructor(public bonus: number, nome: string, salario: number){
        super (nome, salario)
    }

    mosra(): void {
        console.log(`Bonus:  ${this.bonus} + ${super.mostra()}`) //reutilização de código
    }
}
export {Gerente}