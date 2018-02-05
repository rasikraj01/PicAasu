import React, { Component } from 'react';
import toEdit from './../imgs/test.jpg';

class SingleFilter extends Component {
  render() {
    return (
      <div className="SingleFilter">
         <div className="box">
            <img  id="image" src={toEdit} alt="lgo" />
            <p></p>
         </div>
      </div>
    );
  }
}

export default SingleFilter;
