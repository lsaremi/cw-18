import { useState } from "react";

const Clock = () => {
  const getTime = () => {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    second = second < 10 ? `0${second}` : second;

    return `${hours} : ${minutes} : ${second}`;
  };

  const [time, setTime] = useState(getTime());

  setTimeout(() => {
    setTime(getTime());
  }, 1000);

  return <div className="text-white text-[60px] font-bold w-">{time}</div>;
};

export default Clock;
