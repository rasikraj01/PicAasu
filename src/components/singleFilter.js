import React, { Component } from 'react';
import toEdit from './../imgs/test.jpg';
import $ from 'jquery';

class SingleFilter extends Component {
   onFilterClick(name){
      
           var saturate = this.props.filterValues.saturate;
           var contrast = this.props.filterValues.contrast;
           var sepia = this.props.filterValues.sepia;
           var brightness = this.props.filterValues.brightness;
           var blur = this.props.filterValues.blur;
           var grayscale = this.props.filterValues.grayscale;
           var invert = this.props.filterValues.invert;
           var huerotate = this.props.filterValues.hueRotate;

           var filter_values =  `saturate(${saturate}%) blur(${blur}px)  brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${huerotate}deg) invert(${invert}) sepia(${sepia}%)`

      $('#imageInFocus').css('filter', filter_values);
   }
  render() {

     var saturate = this.props.filterValues.saturate;
     var contrast = this.props.filterValues.contrast;
     var sepia = this.props.filterValues.sepia;
     var brightness = this.props.filterValues.brightness;
     var blur = this.props.filterValues.blur;
     var grayscale = this.props.filterValues.grayscale;
     var invert = this.props.filterValues.invert;
     var huerotate = this.props.filterValues.hueRotate;

     var filter_style = {
        filter : `saturate(${saturate}%) blur(${blur}px)  brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${huerotate}deg) invert(${invert}) sepia(${sepia}%)`
     }
    return (
      <li className="SingleFilter">
         <div className="box" onClick={() => this.onFilterClick(this.props.filterValues.name) }>
            <img  id={this.props.filterValues.name} src={toEdit} alt="lgo" style={filter_style}/>
            <p>{this.props.filterValues.name}</p>
         </div>
      </li>
    );
  }
}

export default SingleFilter;
