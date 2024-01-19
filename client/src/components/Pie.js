import React, { Component } from 'react';
import { Pie } from '@nivo/pie';

class DataPie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3 id="pie">Demographics:</h3>
                <Pie
                    width={300}
                    height={150}
                    margin={{
                        top: 30,
                        right: 30,
                        bottom: 30,
                        left: 30
                    }}
                    data={this.props.demographics}
                    animate
                    innerRadius={0.6}
                    padAngle={0.5}
                    cornerRadius={5}
                    radialLabelsLinkColor="inherit"
                    radialLabelsLinkStrokeWidth={3}
                    radialLabelsTextColor="inherit:darker(1.2)"
                    enableSlicesLabels={false}
                />
            </div>
        );
    }
}

export default DataPie;