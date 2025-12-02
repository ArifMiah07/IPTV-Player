import { useEffect, useState } from "react";

export default function ClockPage(){

 const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);



    //
    console.log(time);

    return(
        <div>
            this is clock {time}
        </div>
    )
}