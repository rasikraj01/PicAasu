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
            blur:{
               saturate:0,
               contrast: 0,
               brightness: 0,
               invert: 0,
               hueRotate: 0,
               sepia: 0,
               grayscale: 100,
               blur: 1
            },
            grayscale:{
               saturate:0,
               contrast: 0,
               brightness: 0,
               invert: 0,
               hueRotate: 0,
               sepia: 0,
               grayscale: 100,
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
