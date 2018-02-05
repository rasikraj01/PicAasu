import React, { Component } from 'react';
import Slider from './slider';
import './../style/edit.css';
import Share from './share';

class Edit extends Component {
   // constructor(props){
   //    super(props);
   // }
  render() {
    return (
      <div className="Edit">
         <h1>EDIT</h1>
         <div className="sliders">
<Slider title="Saturate" max="500" unit="%" step="1" value="100"/>
<Slider title="Contrast" max="200" step="1" unit="%" value="100"/>
<Slider title="Brightness" step="1" max="200" unit="%" value="100"/>
<Slider title="Invert" step="1" max="100" unit="%"  value="0"/>
<Slider title="Hue-rotate" min="0" max="360" unit="deg" step="1" value="0"/>
<Slider title="Sepia" max="100" unit="%" step="1" value="0"/>
<Slider title="Grayscale" max="100" step="1" unit="%"  value="0"/>
<Slider title="Blur" max="10" unit="px" step=".1" value="0"/>

            </div>
            <Share />
      </div>

    );
  }
}

export default Edit;
