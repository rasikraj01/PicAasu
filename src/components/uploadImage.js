import React, { Component } from 'react';
import './../style/uploadImage.css';
import Image from './image.js';
import toEdit from './../imgs/test.jpg';
import SaveImage from './saveImage';
import AddImagetoEdit from './AddImagetoEdit';
import $ from 'jquery';



class UploadImage extends Component {

   constructor(props){
      super(props);
      this.state = {
            url : toEdit
      }
      this.UpdateImage = this.UpdateImage.bind(this);
   }


   UpdateImage(){
      var url = $('#image_url').val();
      //console.log(url);
      this.setState({url});
      $('#image_url').val('');
   }
  render() {
    return (
      <div className="uploadImage">
         <Image imgSource={this.state.url}/>
         <div><AddImagetoEdit UpdateImage={this.UpdateImage} /><SaveImage /></div>
      </div>
    );
  }
}

export default UploadImage;
