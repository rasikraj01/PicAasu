import React, { Component } from 'react';
import './../style/filter.css';
import SingleFilter from './singleFilter';

class Filters extends Component {
  render() {
    return (
      <div className="Filter">
         <h1>Filters</h1>

            <SingleFilter/>
      </div>
    );
  }
}

export default Filters;
