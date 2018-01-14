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
<Slider title="hue" />
<Slider title="saturation" max="100" unit="%" />
<Slider title="contrast" max="100" unit="%" />
<Slider title="brightness" max="100" unit="%" />
<Slider title="invert" ref="invert" max="100" unit="%" />
<Slider min="0" max="360" unit="deg" title="hue-rotate"/>
<Slider title="sepia" max="100" unit="%"/>
<Slider title="grayscale" max="100" unit="%" />
<Slider title="opacity" max="10" />
<Slider title="blur" max="10" unit="px" />

            </div>
      </div>

    );
  }
}

export default Edit;
