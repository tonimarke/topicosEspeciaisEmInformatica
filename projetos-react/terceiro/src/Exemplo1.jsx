// importar react
import react from 'react'
//importar o hooks
import {useState} from 'react'

//criar função em não classe
export default function Exemplo1(){
    // criar variável e atribuir o 0 a ela - através do useState(0)
    // definindo que para alterar o valor do contador, devemos usar o SetContador
    const [contador, setContador] = useState(0)

    // Faz o papel do rener
    return (
        <div>
            <div>
                Valor do contador {contador}
            </div>
            <div>
                <button type="button" onClick={()=> setContador(contador + 1)}> Aumenta </button>
            </div>
            <div>
                <button type="button" onClick={()=> setContador(contador - 1)}> Diminui</button>
            </div>
        </div>
    )

}