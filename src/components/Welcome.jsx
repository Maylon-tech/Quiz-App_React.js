import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Quiz from '../img/quiz.svg'

import './Welcome.css'

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    console.log(quizState)

    return ( 
        <div id='welcome'>
            <h2>Seja Bem-Vindo</h2>
            <p>Clique no botao abaixo para comecar</p>
            <button onClick={() => dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
            <img src={Quiz} alt="Inicio do quiz" />
        </div>
     )
}
 
export default Welcome