import React, { Component } from 'react';
import { GeoJSON, Tooltip, Popup } from "react-leaflet";
import citiesInfo from '../static/cities.json';
import Feed from './Feed'
import DataPie from './Pie'
import '../styles/Location.css'

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "borough": "#000"
        };
    }

    componentDidMount() {
        this.setState({"borough": this.props.data.features[0].properties.boro_name});
    }

    getStyle = (feature, layer) => {
        let color = {
            "Brooklyn": "#006400",
            "Queens": "#fad849",
            "Staten Island": "#f3adac",
            "Manhattan": "#74cddd",
            "Bronx": "#d4a1f9"
        }
        return {
            color: color[this.state.borough],
            weight: 5,
            opacity: 0.65
        };
    };
    render() {
        const cityName = this.props.data.features[0].properties.ntaname;
        const desc = citiesInfo[cityName]['description']; //citiesInfo
        const demographics = citiesInfo[cityName]['demographics'];
        const imageUrl = citiesInfo[cityName]['imageUrl'];

        return (
            <GeoJSON data={this.props.data} style={this.getStyle}>
                <Tooltip>{cityName}</Tooltip>
                <Popup 
                    maxWidth={600}
                    keepInView={true}
                    onOpen={() => {}}
                >
                    <h1> {cityName} </h1>
                    <table>
                        <tr>
                            <td id="feed">
                                <Feed city={cityName} style={{width: "50%"}} description={desc}/>
                            </td>
                            <td>
                                <div id="image">
                                    { imageUrl ? (
                                        <img id="imageUrl" src={imageUrl}/>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                                { demographics.length > 0 ? (
                                    <DataPie id="pie" demographics={demographics}/>
                                ) : (
                                    <div></div>
                                )}
                            </td>
                        </tr>
                    </table>
                </Popup>
            </GeoJSON> 
        );
    }
}

export default Location;