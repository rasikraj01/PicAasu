import React, { Component } from 'react';
import Header from './components/header';
import UploadPic from './components/uploadPic';
import Filter from './components/filter';
import Edit from './components/edit';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <UploadPic />
         <Filter />
         <Edit />
         <Footer />
      </div>
    );
  }
}

export default App;
