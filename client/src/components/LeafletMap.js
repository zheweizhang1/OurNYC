import React, { Component } from 'react';
import { Map, GeoJSON, TileLayer, Tooltip, Popup } from "react-leaflet";
import "../styles/LeafletMap.css";
import "leaflet/dist/leaflet.css";
import Location from './Location'
import geojson from '../static/g.json';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  height: "100%"
};

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [40.768, -73.964346]
    }
  }
  
  componentDidMount() {
    //console.log(geojson);
  }

  getStyle = (feature, layer) => {
    console.log(feature, layer);
    let arr = ["#006400", "#19FF67", "#66CC88"];
    return {
      color: arr[Math.floor(Math.random() * arr.length)],
      weight: 5,
      opacity: 0.65
    };
  };
  
  render() {
    const cities = geojson.features.map(feature => { // geojson array contains neighborhood polygon data
      // data contains data for polygon coordinates
      const data = {
        "type": "FeatureCollection",
        "features": [feature]
      };
      return (
        // <Location/> Component renders neighborhood polygons and popup feeds
        <Location data={data}/>
      )
    })

    return (
      <div>
        <Map center={this.state.position} zoom={12} zoomSnap={0.25}>
          {/*TileLayer Component renders map background*/}
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/*cities variable renders <Location/> Component*/}
          {cities}
        </Map>
      </div>
    );
  }
}

export default LeafletMap;