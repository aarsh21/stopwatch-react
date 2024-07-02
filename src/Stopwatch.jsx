import { useState, useRef } from "react";

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (isStopped) {
      setElapsedTime(0);
      setIsStopped(false);
    }
    intervalRef.current = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
    }, 1000);
    setIsRunning(true);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsStopped(true);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setElapsedTime(0);
    setIsStopped(false); // Reset isStopped state when resetting
  };

  const displayTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
  };

  const addZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <>
      <main className="stopWatch">
        <h1 className="Timer">{displayTime(elapsedTime)}</h1>
        <div className="buttons">
          {!isRunning ? (
            <button onClick={start}>Start</button>
          ) : (
            <button onClick={pause}>Pause</button>
          )}
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </main>
      <button className="github">
        {" "}
        <a href="#"> Github </a>
      </button>
    </>
  );
};

export default Stopwatch;
