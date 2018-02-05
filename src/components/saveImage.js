import React, { Component } from 'react';
//import $ from 'jquery';

// take the image with the edits to a new link
// and the user can download the edited make from there

class SaveImage extends Component {

   save(){
      // $(function () {
      //    const canvas = document.getElementById('canvas');
      //    const tosave = document.getElementById('image');
      //
      //    var width = 100;
      //    var height = 100;
      //    const context = canvas.getContext('2d');
      //    context.filter = "sepia(20%)";
      //
      //    context.drawImage(tosave,0,0, width, height);
      //
      //    var dt = canvas.toDataURL('image/jpeg');
      //    this.href = dt;
      // });

      console.log('saved');
   }
  render() {
    return (
      <p className="saveImage">
         <button id="save-button" onClick={this.save()}>Save</button>
         {/* <canvas id="canvas"></canvas> */}
      </p>
    );
  }
}

export default SaveImage;
