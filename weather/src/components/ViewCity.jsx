import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import "../styles/ViewCity.css";

export default function ViewCity({ weather }) {
  const defaultProps = {
    center: {
      lat: weather.location.lat,
      lng: weather.location.lon,
    },
    zoom: 13,
  };

  return (
    <>
      {console.log(weather)}
      <p><span className="texto1">City:</span> <span className="texto2">{weather.location.name}</span> <span className="texto1">Temperature:</span> <span className="texto2">{weather.current.temp_c}C / {weather.current.temp_f}F</span></p>
      <img src={weather.current.condition.icon}></img>
      <p><span className="texto3">Wind Direction:</span> <span className="texto4">{weather.current.wind_dir}</span> <span className="texto3">Conditions:</span> <span className="texto4">{weather.current.condition.text} </span> </p>
      <div style={{ height: "500px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>
    </>
  );
}
