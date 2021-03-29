// vamos importar o react 
import React from 'react'
// vamos importar o Hooks
import {useState} from 'react'

// vamos criar uma função e não uma classe
export default function Exemplo1(){
    // vamos criar uma variável e já atribuir o 0 pra ela - useState(0)
    // estamos definindo que para alterar o valor do contador devemos utilizar o setContador
    const [contador, setContador] = useState(0)

    // faz o papel do render
    return (
        <div className="container">
            <div>
                Valor do contador {contador}
            </div>
            <div>
                <button type="button" onClick={ () => setContador(contador + 1)}> Aumenta </button> 
            </div>
            <div>
                <button type="button" onClick={ () => setContador(contador -1) }> Diminui </button>
            </div>
        </div>
    )

}