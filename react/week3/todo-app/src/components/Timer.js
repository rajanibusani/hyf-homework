import { useState, useEffect } from "react";

const Timer = () => {
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        const time = setTimeout(() => {
            setTimer(prev => prev + 1)
        }, 1000);
        return () => {
            clearTimeout(time)
        }
    })

    return (<h2>You have used {timer} seconds</h2>)
}
export default Timer; 