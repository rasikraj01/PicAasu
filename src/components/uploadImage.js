import React, { Component } from 'react';
import './../style/uploadImage.css';
import Image from './image.js';
import toEdit from './../imgs/test.jpg';
import SaveImage from './saveImage';
import AddImagetoEdit from './AddImagetoEdit';


class UploadImage extends Component {
  render() {
    return (
      <div className="uploadImage">
         <Image imgSource={toEdit}/>
         <div><AddImagetoEdit /><SaveImage /></div>
      </div>
    );
  }
}

export default UploadImage;
