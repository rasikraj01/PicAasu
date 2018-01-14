import React, { Component } from 'react';
import './../style/uploadImage.css';
import Image from './image.js';
import toEdit from './../imgs/test.jpg';


class UploadImage extends Component {
  render() {
    return (
      <div className="uploadImage">
         <Image imgSource={toEdit}/>
         <p>click here to upload ur image <span>click to download image</span></p>
      </div>
    );
  }
}

export default UploadImage;
