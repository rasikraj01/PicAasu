import React, { Component } from 'react';
import Header from './components/header';
import UploadImage from './components/uploadImage';
import Filters from './components/filters';
import Edit from './components/edit';
import Footer from './components/footer';

import './style/app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <div className="container">
            <Filters />
            <UploadImage />
            <Edit />
         </div>
         <Footer />
      </div>
    );
  }
}

export default App;
