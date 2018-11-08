import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "90cf843bc6fbabca75de9a1818a8f1eb";

export default class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    descr: null,
    error: null,
    humidity: null,
    done: false
  };

  getWeather = async e => {
    try {
      e.preventDefault();
      var city = e.target.elements.city.value;
      var country = e.target.elements.country.value;
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`
      );
      const data = await api_call.json();

      if (city && country) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          descr: data.weather[0].description,
          done: true
        });
      } else {
        this.setState({
          error: "Введите значение"
        });
      }
    } catch (error) {
      alert("Ошибка! Скорее всего город не найден.");
    }
  };

  render() {
    return (
      <div className="app">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather {...this.state} />
      </div>
    );
  }
}
