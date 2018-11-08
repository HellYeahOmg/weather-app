import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Город" />
        <input type="text" name="country" placeholder="Страна" />
        <button>Узнать погоду</button>
      </form>
    );
  }
}
// остановился на 1 часу
