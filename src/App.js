import React, { Component } from 'react';
import Header from './components/header';
import UploadImage from './components/uploadImage';
import Filters from './components/filters';
import Edit from './components/edit';
import Footer from './components/footer';

import $ from 'jquery';

import './style/app.css'


class App extends Component {
   constructor(){
      super();
      var filter = [{
         name:'Sepia',
         saturate:100,
         contrast: 100,
         brightness: 100,
         invert: 0,
         hueRotate: 0,
         sepia: 80,
         grayscale: 0,
         blur: 0
      },]
      this.state={
         filter: filter
         }

      this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
   }
   onSaveButtonClick(e){
      e.preventDefault();

      var FilterName = ($('#newFilteraName').val());

      if(FilterName!== ""){

         var saturate = ($('#saturate').val());
         var contrast = ($('#contrast').val());
         var sepia = ($('#sepia').val());
         var brightness = ($('#brightness').val());
         var blur = ($('#blur').val());
         var grayscale = ($('#grayscale').val());
         var invert = ($('#invert').val());
         var huerotate = ($('#hue-rotate').val());

         var NewFilter = {
            name:FilterName,
            saturate:saturate,
            contrast: contrast,
            brightness: brightness,
            invert: invert,
            hueRotate: huerotate,
            sepia: sepia,
            grayscale: grayscale,
            blur: blur
         }
         this.setState({filter: this.state.filter.concat(NewFilter)});

      }else{
         alert('Please Give a Name to the Filter!');
         
         //$('.share').append('<p class="caution">Please Give a Name to the Filter</p>')
      }

      // TEST
      //console.log(NewFilter);
      //console.log(this.state.filter);
      }
  render() {
    return (
      <div className="App">
         <Header />
         <div className="container">
            <Filters filters={this.state.filter}/>
            <UploadImage />
            <Edit save={this.onSaveButtonClick}/>
         </div>
         <Footer />
      </div>
    );
  }
}

export default App;
