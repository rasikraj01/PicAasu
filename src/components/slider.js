import React, { Component } from 'react';
import $ from 'jquery';

class Slider extends Component {
   constructor(props){
      super(props);
      this.state={

      }
   }
   OnInputChange(){

      // var opacity = ($('#opacity').val())/100;
      var saturate = ($('#saturate').val());
      var contrast = ($('#contrast').val());
      var sepia = ($('#sepia').val());
      var brightness = ($('#brightness').val());
      var blur = ($('#blur').val());
      var grayscale = ($('#grayscale').val());
      var invert = ($('#invert').val());
      var huerotate = ($('#hue-rotate').val());

      $('img#imageInFocus').css('filter', `saturate(${saturate}%) blur(${blur}px)  brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${huerotate}deg) invert(${invert}) sepia(${sepia}%)`);


      console.log(` saturate(${saturate}%) blur(${blur}px)  brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${huerotate}deg) invert(${invert}) sepia(${sepia}%)`);
   }
  render() {
    return (
      <div className="warp">
            <p>{this.props.title}:</p>
            <input type="range" min="0" max={this.props.max} className="slider" id={this.props.title} deg={this.props.unit} onChange={event => this.OnInputChange()} step={this.props.step} defaultValue={this.props.value} />
      </div>
    );
  }
}

export default Slider;
