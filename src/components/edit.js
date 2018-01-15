import React, { Component } from 'react';
import Slider from './slider';
import './../style/edit.css';
import Share from './share';

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
<Slider title="saturation" max="100" unit="%" step="1" />
<Slider title="contrast" max="100" step="1" unit="%" />
<Slider title="brightness" step="1" max="100" unit="%" />
<Slider title="invert" step="1" max="100" unit="%" />
<Slider min="0" max="360" unit="deg" step="1" title="hue-rotate"/>
<Slider title="sepia" max="100" unit="%" step="1"/>
<Slider title="grayscale" max="100" step="1" unit="%" />
<Slider title="opacity" max="100" step="1"/>
<Slider title="blur" max="10" unit="px" step=".1"/>

            </div>
            <Share />
      </div>

    );
  }
}

export default Edit;
