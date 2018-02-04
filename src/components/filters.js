import React, { Component } from 'react';
import './../style/filter.css';
import SingleFilter from './singleFilter';

class Filters extends Component {
  render() {

      console.log(this.props.filters.blur)
    return (
      <div className="Filter">

            <SingleFilter/>
      </div>
    );
  }
}

export default Filters;
