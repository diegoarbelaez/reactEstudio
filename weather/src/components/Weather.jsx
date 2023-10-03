import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import ViewCity from "./ViewCity";
import Loader from "./Loader";
import Grid from "@mui/material/Grid";
import "../styles/Weather.css";

export default function Weather() {
  let url = "";

  const [city, setCity] = useState("New York");
  const [weatherObject, setWeatherObject] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [noEncontrada, setNoEncontrada] = useState(false);

  useEffect(() => {
    url = import.meta.env.VITE_REACT_APP_URL.replace("%CITY%", city);
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((datos) => {
        console.log(datos);
        if (datos.hasOwnProperty("error")) {
          setNoEncontrada(true);
          return;
        } else {
          setNoEncontrada(false);
          setWeatherObject(datos);
          setIsLoading(false);
          document.title = "Weather "+ city;
          console.log("Clima Cambiado")
        }
      })
      .catch((error) => {
        console.log("error, ciudad no encontrada");
      });
  }, [city]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <div className="centrado">
          <WeatherForm setIsLoading={setIsLoading} setCity={setCity} />
          {isLoading ? (
            noEncontrada ? (
              <p className="texto1">City not found</p>
            ) : (
              <Loader />
            )
          ) : (
            <ViewCity weather={weatherObject} />
          )}
        </div>
      </Grid>
    </Grid>
  );
}
