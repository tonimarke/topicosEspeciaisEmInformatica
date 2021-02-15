import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Crud extends Component {
  //metodo que renderiza
    render(){
        return (

        <div>
            <h1> Calculadora de IMC </h1>
            <div className="form">
                <div className="form-group">
                    <label> Peso </label>
                    <input type="number" className="form-control" name ="peso" placeholder="Insira o peso usando ."></input>
                </div>
                <div className="form-group">
                    <label> Altura </label>
                    <input type="number" className="form-control" name="altura" placeholder="Insira a altura usando ."></input>
                </div>
            </div>
            <button type="button" className="btn btn-primary"> Calcular </button>
        </div>
        )
    }
}