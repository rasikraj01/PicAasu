import React, { Component } from 'react';
import './../style/edit.css';

class Edit extends Component {
   ValueonChange(value){
      console.log(value);
   }
  render() {
    return (
      <div className="Edit">
         <h1>EDIT</h1>
<div className="sliders">
   <div className="warp">
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
<p>Hue:</p>
<input type="range" min="1" max="100" className="slider" id="myRange"/>
</div></div></div>

    );
  }
}

export default Edit;
