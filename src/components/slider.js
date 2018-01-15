import React, { Component } from 'react';
import $ from 'jquery';

class Slider extends Component {
   constructor(props){
      super(props);
      this.state = {
         value: '50'
      }
   }
   OnInputChange(value, id, unit){
      this.setState({value});
      var smalv = value;
      $('.uploadImage img').css("filter", `${id}(${smalv}${unit})`);
      console.log(`${id}(${smalv}${unit})`);
   }
  render() {
    return (
      <div className="warp">
            <p>{this.props.title}:</p>
            <input type="range" min="0" max={this.props.max} className="slider" id={this.props.title} deg={this.props.unit} onChange={event => this.OnInputChange(event.target.value, this.props.title,  this.props.unit)} step={this.props.step}/>
            {this.state.value}
      </div>
    );
  }
}

export default Slider;
