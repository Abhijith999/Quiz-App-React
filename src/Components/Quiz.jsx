import { useState } from "react"
 
function Quiz(){
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    
    return(
        <p>this is first Qn</p>
    )
}
export default Quiz