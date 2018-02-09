import React, { Component } from 'react';

class Share extends Component {
  render() {
    return (
      <p className="share">
         <input id="newFilteraName" type="text" placeholder="Name Your Filter"/>
         <button id="share"> Share</button>
      </p>
    );
  }
}

export default Share;
