import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Fatec Franca</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/"> Home </Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cadastra">Cadastra</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/consulta">Consulta</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}