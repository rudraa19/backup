import React, { useEffect, useRef, useState } from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {

        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return () => {clearInterval(intervalIdRef.current)}

    }, [isRunning])

    function start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false)
    }

    function reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }

    function formatTime() {
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
        let secs = Math.floor(elapsedTime / (1000) % 60);
        let milisecs = Math.floor((elapsedTime % 1000) /10);

        mins = String(mins).padStart(2, "0")
        secs = String(secs).padStart(2, "0")
        milisecs = String(milisecs).padStart(2, "0")

        return `${mins}:${secs}:${milisecs}`
    }
    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;