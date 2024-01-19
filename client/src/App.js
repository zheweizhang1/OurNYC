import React, { Component } from 'react';
import Burger from './components/Burger';
import LeafletMap from './components/LeafletMap';
import LocationSearch from './components/LocationSearch';
import About from './components/About';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Burger/>
        {/*LocationSearch == Search bar*/}
        <LocationSearch root="location-search"/>
        {/*LeafletMap == Rendered map of NYC with boroughs*/}
        <LeafletMap/>
      </div>
    );
  }
}

export default App;
