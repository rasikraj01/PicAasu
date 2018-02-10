import React, { Component } from 'react';
import './../style/uploadImage.css';

class AddImagetoEdit extends Component {
  render() {
    return (
      <div className="AddImagetoEdit">
            <input id="image_url" name="url" type="text" autoComplete="off" placeholder="Enter URL of the Image to Edit" />
            <input type="submit" onClick={this.props.UpdateImage} value="Use"/>
      </div>
    );
  }
}

export default AddImagetoEdit;
