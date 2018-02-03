import React, { Component } from 'react';
import './../style/uploadImage.css';

class AddImagetoEdit extends Component {
   onFormSubmit(e){
      e.PreventDefault();
      console.log('got url');
   }
  render() {
    return (
      <div className="AddImagetoEdit">
         <form onSubmit={this.onFormSubmit}>
            <input name="url" type="text" placeholder="enter url to edit image"/>
            <input type="submit"/>
         </form>
      </div>
    );
  }
}

export default AddImagetoEdit;
