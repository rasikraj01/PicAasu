import React, { Component } from 'react';
import $ from 'jquery';

class Share extends Component {
   onButtonclick(e){
      e.preventDefault();
      var FilterName = ($('#newFilteraName').val());
      console.log(FilterName);
      
   }
   render() {
    return (
      <p className="share">
         <input id="newFilteraName" type="text" placeholder="Name Your Filter" autoComplete="off"/>
         <input type="submit" id="share" onClick={this.onButtonclick}/>
      </p>
    );
  }
}

export default Share;
