import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from './Autocomplete.js';
import '../styles/Autocomplete.css';
import citiesInfo from '../static/cities.json';
import DirectionsIcon from '@material-ui/icons/Directions';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    "margin": '2.8em 0px 0px 5em',
    "position": "absolute",
    "transform": "translate(-50%)",
    "left": "25%",
    "width": "30%",
    'z-index': 5,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class LocationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    }
  }

  clickLocation = () => {
    let dummyPos = [-73,40];
    console.log(this.state)
    alert(`you have clicked ${this.state.searchText}`)
  }

  render() {
    const { classes } = this.props;
    var citiesNames = Object.keys(citiesInfo).sort(); // citiesNames contains sorted array of all cities names

    return (
      <Paper className={classes.root} elevation={1}>
        <IconButton className={classes.iconButton} aria-label="Menu">
        </IconButton>

        {/* Input (autocomplete) */}
        <Autocomplete handleSearchText={text => {
          console.log(this.state)
          console.log(`text: ${text}`)
          this.setState({ searchText: text })
        }} suggestions={citiesNames} />
        
        {/*Search icon logo*/}
        <IconButton onClick={this.clickLocation} className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} />
        {/*Directions icon logo*/}
        {/* <IconButton color="primary" className={classes.iconButton} aria-label="Directions"> */}
          {/* <DirectionsIcon /> */}
        {/* </IconButton> */}
      </Paper>
    );
  }
}

LocationSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationSearch);
