import React, { Component } from 'react';
import $ from 'jquery';

class Slider extends Component {
   constructor(props){
      super(props);
      this.state = {
         value: '50'
      }
   }
   OnInputChange(value){
      this.setState({value});
      var smalv = value/100;
      $('.uploadImage img').css("filter", 'invert(this.samlv)');
   }
  render() {
    return (
      <div className="warp">
            <p>{this.props.title}:</p>
            <input type="range" min="0" max={this.props.max} className="slider" id={this.props.title} deg={this.props.unit} onChange={event => this.OnInputChange(event.target.value)}/>
            {this.state.value}
      </div>
    );
  }
}

export default Slider;
