import React, { Component } from 'react';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: "",
            population: [],
            demographics: []
        }
    }

    componentDidMount() {
        // fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${encodeURIComponent(this.props.city)}`)
        // .then(res => res.json())
        // .then(data => {
        //     let m = data.query.pages;
        //     let summary = m[Object.keys(m)[0]].extract;
        //     this.setState({ summary })
        // })
        // .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <p> {this.props.description} </p>
            </div>
        );
    }
}


export default Feed;