import React, { Component } from 'react';
import './../style/uploadImage.css';
import $ from 'jquery';

class AddImagetoEdit extends Component {
   // onFormSubmit(e){
   //    e.preventDefault();
   //    var imageURL = $('#image_url').val();
   //    console.log(imageURL);
   // }
  render() {

    return (
      <div className="AddImagetoEdit">
            <input id="image_url" name="url" type="text" placeholder="enter url to edit image" />
            <input type="submit" onClick={this.props.UpdateImage}/>
      </div>
    );
  }
}

export default AddImagetoEdit;
