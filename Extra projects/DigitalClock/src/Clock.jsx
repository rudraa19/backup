import React, { useEffect, useState } from "react";

function Clock() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        let minuts = time.getMinutes();
        let seconds = time.getSeconds();
        const meridium = hours > 12 ? "PM" : "AM";

        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(minuts)}:${padZero(seconds)} ${padZero(meridium)}`
    }

    function padZero(num) {
        return num < 10 ? "0"+num : num
    }

    return(<div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>)
}

export default Clock