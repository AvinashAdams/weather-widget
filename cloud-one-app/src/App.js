import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TopSection from "./components/header";
import BottomSection from "./components/forecast";
import Info from "./components/info";

import axios from "axios";

const Weather_Key = "05fa14e773434825be0193343191301";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "london",
      forecastDays: 5,
      isloading: true,

    }
  }

  componentDidMount() {
    const { cityName, forecastDays } = this.state;

    const URL = 'http://api.apixu.com/v1/forecast.json?key=${Weather_Key} &q=${cityName} &days=${forecastDays}';
    axios.get(URL).then((res) => {
      return res.data;
    }).then((data) => {

      this.setState({
        isloading: false, 
        temp_c: data.current.temp_c, 
        isDay: data.current.is_day, 
        text: data.current.condition.text, 
        iconURL: data.current.condition.icon
      });
    })

    .catch((err) => {
      if(err)
        console.error("Cannot get weather, please check if spelling is correct", err);
    });
  }


  render() {

    const { isloading, cityName, temp_c, isDay, text, iconURL } = this.state;

    return ( <div className="app-container">

      <div className="main-container">
        {isloading && <h3>Loading Weather...</h3>}
        { !isloading &&
        <div className="top-section">
          <TopSection location={cityName} temp_c={temp_c} isDay={isDay} text={text} iconURL={iconURL}/>
        </div>}
        <div className="bottom-section">
        <BottomSection />
        </div>
      </div>
    </div>
    );   
  }
}

export default App;