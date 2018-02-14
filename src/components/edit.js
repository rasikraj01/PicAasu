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
         <h1>FILTERS</h1>
         <div className="sliders">
<Slider title="saturate" max="500" unit="%" step="1" value="100"/>
<Slider title="contrast" max="200" step="1" unit="%" value="100"/>
<Slider title="brightness" step="1" max="200" unit="%" value="100"/>
<Slider title="invert" step="1" max="100" unit="%"  value="0"/>
<Slider title="hue-rotate" min="0" max="360" unit="deg" step="1" value="0"/>
<Slider title="sepia" max="100" unit="%" step="1" value="0"/>
<Slider title="grayscale" max="100" step="1" unit="%"  value="0"/>
<Slider title="blur" max="10" unit="px" step=".1" value="0"/>

            </div>
            <p className="share">
               <input id="newFilteraName" type="text" placeholder="Name Your Filter" autoComplete="off"/>
               <input type="submit" id="share" onClick={this.props.save} value="Share"/>
            </p>
      </div>

    );
  }
}

export default Edit;
