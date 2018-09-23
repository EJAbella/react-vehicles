import React, { Component } from 'react';
import './App.css';
import TopNav from "./components/TopNav";
import VehicleList from "./components/VehicleList";

class App extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        <VehicleList/>
      </div>
    );
  }
}

export default App;
