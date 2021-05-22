import React from "react";

const Weather = ({ weather }) => {
  if (weather.length === 0) return <div> Soon </div>;
  return (
    <>
      <div>
        <strong>temperature:</strong> {weather.current.temp_c} celcius
      </div>
      <img src={weather.current.condition.icon} alt="icon" />
      <div>
        <strong>wind:</strong> {weather.current.wind_mph}mph direction {weather.current.wind_dir}{" "}
      </div>
    </>
  );
};
export default Weather;
