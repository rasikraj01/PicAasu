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
      <form className="share">
         <input id="newFilteraName" type="text" placeholder="Name Your Filter" />
         <input type="submit" id="share" onSubmit={this.onButtonclick.bind(this)}/>
      </form>
    );
  }
}

export default Share;
