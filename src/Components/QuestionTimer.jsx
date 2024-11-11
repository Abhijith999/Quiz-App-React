import { useState, useEffect } from "react"

function QuestionTimer({timeout, onTimeOut}){
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(()=>{
        setTimeout(onTimeOut, timeout)
        console.log('setting timeout')
    }, [timeout, onTimeOut])

    useEffect(()=>{
        setInterval(()=>{
            setRemainingTime((prevRemainingTime)=>{
                return prevRemainingTime - 100
            })
        }, 100)
    }, [])
    
    
    return(
        <progress id="question-time" value={remainingTime} max={timeout}/>
    )
}
export default QuestionTimer