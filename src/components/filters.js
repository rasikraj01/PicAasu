import React, { Component } from 'react';
import './../style/filter.css';
import SingleFilter from './singleFilter';

class Filters extends Component {
  render() {
     for (var key in this.props.filters){
        console.log(key);
        console.log(this.props.filters[key]);
     }
    return (
      <div className="Filter">

            <SingleFilter />
      </div>
    );
  }
}

export default Filters;
