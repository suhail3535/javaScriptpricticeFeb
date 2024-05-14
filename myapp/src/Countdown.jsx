import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div>
            <h1>Timer: {seconds} seconds</h1>
            <div>
                <button onClick={handleStart} disabled={isActive}>
                    Start
                </button>
                <button onClick={handleStop} disabled={!isActive}>
                    Stop
                </button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
