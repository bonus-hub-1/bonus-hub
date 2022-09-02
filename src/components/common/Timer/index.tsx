import React from "react";
import {useTimer} from "react-timer-hook";
import "./Timer.scss";

type TimerProps = {
  expiryTimestamp: Date;
};

const Timer: React.FC<TimerProps> = ({expiryTimestamp}) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="timer">
      <div className="timer__container" style={{fontSize: "100px"}}>
        {days ? (
          <div className="block">
            <span className="time">{days}</span>
            <span className="text">дней</span>
          </div>
        ) : (
          ""
        )}

        {hours ? (
          <div className="block">
            <span className="time">{hours}</span>
            <span className="text">час</span>
          </div>
        ) : (
          ""
        )}

        <div className="block">
          <span className="time">{minutes}</span>
          <span className="text">минут</span>
        </div>

        <div className="block">
          <span className="time">{seconds}</span>
          <span className="text">секунд</span>
        </div>
      </div>
    </div>
  );
};

export {Timer};
