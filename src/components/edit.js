import React, { Component } from 'react';
import Slider from './slider';
import './../style/edit.css';

class Edit extends Component {
   constructor(props){
      super(props);
      this.state = {

      }
   }
  render() {
    return (
      <div className="Edit">
         <h1>EDIT</h1>
         <div className="sliders">
<Slider title="hue"/>
<Slider title="saturation"/>
<Slider title="contrast"/>
<Slider title="brightness"/>
<Slider title="invert"/>
<Slider title="hue-rotate"/>
<Slider title="sepia"/>
<Slider title="grayscale"/>
<Slider title="opacity"/>
<Slider title="blur"/>

            </div>
      </div>

    );
  }
}

export default Edit;
