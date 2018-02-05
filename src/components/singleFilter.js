import React, { Component } from 'react';
import toEdit from './../imgs/test.jpg';
import $ from 'jquery';

class SingleFilter extends Component {
  render() {

     var saturate = this.props.filterValues.saturate;
     var contrast = this.props.filterValues.contrast;
     var sepia = this.props.filterValues.sepia;
     var brightness = this.props.filterValues.brightness;
     var blur = this.props.filterValues.blur;
     var grayscale = this.props.filterValues.grayscale;
     var invert = this.props.filterValues.invert;
     var huerotate = this.props.filterValues.hueRotate;
     //
     // var filter =  `saturate(${saturate}%) blur()  brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${huerotate}deg) invert(${invert}) sepia(${sepia}%)`;
     // console.log(filter);


     var stylesss = {
        filter : `saturate(${saturate}%) blur(${blur}px)  brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${huerotate}deg) invert(${invert}) sepia(${sepia}%)`
     }
    return (
      <li className="SingleFilter">
         <div className="box">
            <img  id={this.props.filterName} src={toEdit} alt="lgo" style={stylesss}/>
            <p>{this.props.filterName}</p>
         </div>
      </li>
    );
  }
}

export default SingleFilter;
