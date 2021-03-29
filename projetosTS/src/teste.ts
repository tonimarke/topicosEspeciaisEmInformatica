import {Funcionario} from "./Funcionarios"
import {Gerente} from "./Gerente"

let objeto = new Funcionario("matheus", 2000)

objeto.pagarConta(300)

objeto.mostra()

let objeto2 = new Gerente(2000, "Mariana", 4000)

objeto2.pagarConta(500)
objeto2.mostra()