import React, { useState, useEffect } from "react";
import "./Count.css";

const Count = () => {
  const [days, setdays] = useState(3);
  const [hour, setHours] = useState(5);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(44);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hour === 0) {
            if (days === 0) {
              clearInterval(myInterval);
            } else {
              setdays(days - 1);
              setHours(24);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setHours(hour - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="CountDownTimer">
      <section>
        <h1 className="TimeHText"> {days < 10 ? `0${days}` : days}</h1>
        <p className="TimeSText">Day</p>
      </section>
      <section>
        <h1 className="TimeHText">{hour < 10 ? `0${hour}` : hour}</h1>
        <p className="TimeSText">HOURS</p>
      </section>
      <section>
        <h1 className="TimeHText">{minutes < 10 ? `0${minutes}` : minutes}</h1>
        <p className="TimeSText">MINUTES</p>
      </section>
      <section>
        <h1 className="TimeHText2">{seconds < 10 ? `0${seconds}` : seconds}</h1>
        <p className="TimeSText2">SECOND</p>
      </section>
    </div>
  );
};

export default Count;
