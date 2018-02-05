import React, { Component } from 'react';
import Header from './components/header';
import UploadImage from './components/uploadImage';
import Filters from './components/filters';
import Edit from './components/edit';
import Footer from './components/footer';

import './style/app.css'


class App extends Component {
   constructor(){
      super();
      this.state={
         filter:{
            Sepia:{
               key:0,
               saturate:100,
               contrast: 100,
               brightness: 100,
               invert: 0,
               hueRotate: 0,
               sepia: 80,
               grayscale: 0,
               blur: 0
            },
            hueRotate:{
               key:1,
               saturate:100,
               contrast: 100,
               brightness: 100,
               invert: 0,
               hueRotate: 270,
               sepia: 0,
               grayscale: 0,
               blur: 0
            },
            grayscale:{
               key:2,
               saturate:100,
               contrast: 100,
               brightness: 100,
               invert: 0,
               hueRotate: 0,
               sepia: 0,
               grayscale: 100,
               blur: 0
            },
            invert:{
               key:3,
               saturate:100,
               contrast: 100,
               brightness: 100,
               invert: 50,
               hueRotate: 0,
               sepia: 0,
               grayscale: 0,
               blur: 0
            },

            Contrast:{
               key:4,
               saturate:100,
               contrast: 200,
               brightness: 100,
               invert: 0,
               hueRotate: 0,
               sepia: 0,
               grayscale: 0,
               blur: 0
            },
            Exposed:{
               key:5,
               saturate:100,
               contrast: 100,
               brightness: 200,
               invert: 0,
               hueRotate: 0,
               sepia: 0,
               grayscale: 0,
               blur: 0
            },
            Saturated:{
               key:6,
               saturate:200,
               contrast: 100,
               brightness: 100,
               invert: 0,
               hueRotate: 0,
               sepia: 0,
               grayscale: 0,
               blur: 0
            },
            pixel:{
               key:7,
               saturate:100,
               contrast: 100,
               brightness: 150,
               invert: 0,
               hueRotate: 300,
               sepia: 0,
               grayscale: 0,
               blur: 0
            },
            Apple:{
               key:8,
               saturate:140,
               contrast: 100,
               brightness: 90,
               invert: 0,
               hueRotate: 0,
               sepia: 0,
               grayscale: 60,
               blur: 0
            },
         }
      }
   }

  render() {
    return (
      <div className="App">
         <Header />
         <div className="container">
            <Filters filters={this.state.filter}/>
            <UploadImage />
            <Edit />
         </div>
         <Footer />
      </div>
    );
  }
}

export default App;
