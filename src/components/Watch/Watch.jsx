import { useEffect, useState } from "react";

import { useFetch } from "../../hooks";

function Watch() {
  const [country, setCountry] = useState("Asia/Dubai");
  const [isRunning, setIsRunning] = useState(true);
  const [formattedTime, setFormattedTime] = useState("00:00:00");
  const [time, setTime] = useState(0);

  // Get all timezones
  const [countryLoading, countries] = useFetch(
    "https://worldtimeapi.org/api/timezone"
  );

  // get selected zone time (default Asia/Dubai)
  const [timeLoading, timerObj] = useFetch(
    `https://worldtimeapi.org/api/timezone/${country}`
  );

  const loading = countryLoading || timeLoading;

  // Set time when timerObj change
  useEffect(() => {
    if (timerObj) {
      const { utc_datetime, utc_offset } = timerObj;
      const offsetMillis = new Date().getTimezoneOffset() * 60 * 1000;
      const localUtcTime = new Date(utc_datetime).getTime() + offsetMillis;
      const timezoneOffset = Number(utc_offset.slice(0, 3)) * 60 * 60 * 1000;

      console.log("New time zone update");
      setTime(localUtcTime + timezoneOffset);
      const date = new Date(localUtcTime + timezoneOffset);
      // Get hours, minutes, and seconds
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      setFormattedTime(`${hours}:${minutes}:${seconds}`);
    }
  }, [timerObj]);

  // Run when timer stop or start.
  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        const date = new Date(time);
        // Get hours, minutes, and seconds
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        setFormattedTime(`${hours}:${minutes}:${seconds}`);
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      timerId && clearInterval(timerId);
    }

    return () => timerId && clearInterval(timerId);
  }, [isRunning, time]);

  if (loading) {
    return <p className="text-lg font-medium">Loading...</p>;
  }

  return (
    <div className="md:flex md:justify-between md:items-center gap-2 font-medium text-lg">
      <select
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      >
        <option disabled>Choose Country</option>
        {countries?.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <div className="text-gray-600 px-5 py-2 rounded border bg-orange-200 shadow-2xl my-2 font-bold text-2xl text-nowrap">
        {formattedTime}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
}

export default Watch;
