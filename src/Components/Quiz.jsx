import { useState } from "react"
import QUESTIONS from "../questions.js"
import quizCompleteLogo from "../assets/quiz-complete.png"
 
function Quiz(){
    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswer.length;
    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;
    
    if(isQuizComplete){
        return(
            <div id="summary">
                <img src={quizCompleteLogo} alt="quiz-complete-logo" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledArray = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledArray.sort(()=>Math.random() - 0.5)

    function handleSelectAnswer(answer){
        setUserAnswer((prevAnswer)=>{
            return [...prevAnswer, answer]
        })
    }
    
    return(
        <div id="quiz">
            <div className="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledArray.map((answer, index)=>{
                        return <li key={index} className="answer">`<button onClick={()=>handleSelectAnswer(answer)}>{answer}</button></li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Quiz