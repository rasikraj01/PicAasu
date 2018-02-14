import React, { Component } from 'react';
import $ from 'jquery';
// take the image with the edits to a new link
// and the user can download the edited make from there

class SaveImage extends Component {

   saved(){
      //    $('.SaveImage').append('<canvas id="canvas"></canvas>');
      //    const canvas = document.getElementById('canvas');
      //    const tosave = document.getElementById('imageInFocus');
      //
      //    var width = document.getElementById('imageInFocus').width;
      //    var height = document.getElementById('imageInFocus').height;
      //
      //     const context = canvas.getContext('2d');
      //     context.filter = "sepia(50%)";
      //
      //     context.drawImage(tosave,0,0, width, height);
      //
      //     var dt = canvas.toDataURL('image/jpeg');
      //     $('#save-button').href = dt;
      //
      //
      // console.log('saved');
   }
  render() {
    return (
      <p className="saveImage">
         <button id="save-button" onClick={this.saved()}>Save</button>

      </p>
    );
  }
}

export default SaveImage;
