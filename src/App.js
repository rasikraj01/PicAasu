import React, { Component } from 'react';
import Header from './components/header';
import Image from './components/image';
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
            <Image />
            <Edit />
         </div>
         <Footer />
      </div>
    );
  }
}

export default App;
