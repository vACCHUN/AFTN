import { useState, useEffect } from "react";
import { getDateTime } from "../Utils/GetDate";

export default function Clock() {
  const [datetime, setDatetime] = useState<string>(getDateTime());

  useEffect(() => {
    const updateTime = () => {
      const newTime = getDateTime();
      setDatetime(newTime);
      requestAnimationFrame(updateTime);
    };
    updateTime();

    return () => {};
  }, []);

  return <div className="font-bold text-2xl text-[#ffff00]">{datetime}</div>;
}
