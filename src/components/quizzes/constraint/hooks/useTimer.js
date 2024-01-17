import { useEffect, useState } from "react";

const useTimer = (timerInMins) => {
  const minsToSecs = Math.floor(timerInMins) * 60;

  const [time, setTime] = useState(minsToSecs);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          setTimerExpired(true);
          clearInterval(intervalId);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = time % 60;

  return {
    seconds: String(secs).padStart(2, "0"),
    minutes: String(mins).padStart(2, "0"),
    hours,
    timerExpired,
  };
};

export default useTimer;
