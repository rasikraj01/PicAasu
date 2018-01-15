import React, { Component } from 'react';
import './../style/uploadImage.css';
import Image from './image.js';
import toEdit from './../imgs/test.jpg';
import SaveImage from './saveImage';

class UploadImage extends Component {
  render() {
    return (
      <div className="uploadImage">
         <Image imgSource={toEdit}/>
         <div>click here to upload ur image<SaveImage /></div>
      </div>
    );
  }
}

export default UploadImage;
