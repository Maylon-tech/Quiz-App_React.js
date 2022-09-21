import React from 'react'
import Quiz from '../img/quiz.svg'

import './Welcome.css'

const Welcome = () => {
    return ( 
        <div id='welcome'>
            <h2>Seja Bem-Vindo</h2>
            <p>Clique no botao abaixo para comecar</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="Inicio do quiz" />
        </div>
     )
}
 
export default Welcome