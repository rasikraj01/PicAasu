import React, { Component } from 'react';
import './../style/filter.css';
import SingleFilter from './singleFilter';

class Filters extends Component {
  render() {
     var listOfFilters=[];
     var filterValues = [];
     for (var key in this.props.filters){
        //console.log(this.props.filters[key]);
        listOfFilters.push(key);
        filterValues.push(this.props.filters[key]);
     }
     console.log(filterValues);

    return (
      <div className="Filter">
            {
               listOfFilters.map((item, index)=> <SingleFilter filterName = {item} filterValues={filterValues[index]}/>)
            }
      </div>
    );
  }
}

export default Filters;
