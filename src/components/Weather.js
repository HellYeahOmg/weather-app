import React from "react";

export default class Weather extends React.Component {
  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      descr,
      done,
      error
    } = this.props;
    return done ? (
      <div className="weather">
        <p>
          Местонахождение: {city}, {country}
        </p>
        <p>Влажность: {humidity}% </p>
        <p>Температура: {temperature}</p>
        <p>Состояние: {descr}</p>
      </div>
    ) : error ? (
      error
    ) : null;
  }
}
