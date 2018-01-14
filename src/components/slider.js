import React, { Component } from 'react';

class Slider extends Component {
   constructor(props){
      super(props);
      this.state = {

      }
   }
   OnInputChange(value){
      console.log(value);
   }
  render() {
    return (
      <div className="warp">
            <p>Name:</p>
            <input type="range" min="1" max="100" className="slider" id="hue" onChange={event => this.OnInputChange(event.target.value)}/>
      </div>
    );
  }
}

export default Slider;
