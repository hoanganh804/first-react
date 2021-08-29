import React, { useEffect, useState } from "react";

export default function Clock() {
  const [timeNow, setTimeNow] = useState("");

  const handleTime = (date) => {
    const gio = `0${date.getHours()}`.slice(-2);
    const phut = `0${date.getMinutes()}`.slice(-2);
    const giay = `0${date.getSeconds()}`.slice(-2);
    const thoigian = `${gio}:${phut}:${giay}`;
    return thoigian;
  };

  useEffect(() => {
    const idTimes = setInterval(() => {
      const date = new Date();
      const newTime = handleTime(date);
      setTimeNow(newTime);
    }, 1000);
    return () => clearInterval(idTimes);
  }, []);
  return (
    <div>
      <h2>Clock</h2>
      <h4>{timeNow}</h4>
    </div>
  );
}
