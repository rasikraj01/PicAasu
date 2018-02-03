import React, { Component } from 'react';
import $ from 'jquery';


class SaveImage extends Component {

   save(){
      $(function () {
         const canvas = document.getElementById('canvas');
         const tosave = document.getElementById('image');

         var width = 100;
         var height = 100;
         const context = canvas.getContext('2d');
         context.filter = "sepia(20%)";

         context.drawImage(tosave,0,0, width, height);

         var dt = canvas.toDataURL('image/jpeg');
         this.href = dt;
      });
   }
  render() {
    return (
      <p className="saveImage">
         <button id="save-button" onClick={this.save()}>Save</button>
         <canvas id="canvas"></canvas>
         <div id="photos" onClick={this.save()} width="100" height="100" backgroud="black"></div>
      </p>
    );
  }
}

export default SaveImage;
