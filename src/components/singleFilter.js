import React, { Component } from 'react';
import Image from './image';
import toEdit from './../imgs/test.jpg';

class SingleFilter extends Component {
  render() {
    return (
      <div className="SingleFilter">
         <div className="box">
            <Image imgSource={toEdit}/>
            <p>Name</p>
         </div>
      </div>
    );
  }
}

export default SingleFilter;
