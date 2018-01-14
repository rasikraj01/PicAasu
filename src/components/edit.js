import React, { Component } from 'react';
import Slider from './slider';
import './../style/edit.css';

class Edit extends Component {
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
      <div className="Edit">
         <h1>EDIT</h1>
         <div className="sliders">
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>

            </div>
      </div>

    );
  }
}

export default Edit;
