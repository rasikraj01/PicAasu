import React, { Component } from 'react';
import './../style/uploadImage.css';

class AddImagetoEdit extends Component {
   onFormSubmit(e){
      e.preventDefault();
      console.log('got url');
   }
  render() {
    return (
      <div className="AddImagetoEdit">
            <input name="url" type="text" placeholder="enter url to edit image"/>
            <input type="submit" onClick={this.onFormSubmit}/>
      </div>
    );
  }
}

export default AddImagetoEdit;
