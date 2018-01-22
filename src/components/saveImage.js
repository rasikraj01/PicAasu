import React, { Component } from 'react';

class SaveImage extends Component {
   onButtonClick(){
      console.log('button clicked');

  function takePicture() {
    // Create canvas
    const context = canvas.getContext('2d');
    if(width && height) {
      canvas.width = width;
      canvas.height = height;
      // Draw an image of the video on the canvas
      context.drawImage(video, 0, 0, width, height);

      // Create image from the canvas
      const imgUrl = canvas.toDataURL('image/png');

      // Create img element
      const img = document.createElement('img');

      // Set img src
      img.setAttribute('src', imgUrl);

      // Set image filter
      img.style.filter = filter;

      // Add image to photos
      photos.appendChild(img);
    }
  }
   }
  render() {
    return (
      <p className="saveImage">
         <button id="save-button" onClick={this.onButtonClick()}>Save</button>
         <canvas id="canvas"></canvas>
      </p>
    );
  }
}

export default SaveImage;
