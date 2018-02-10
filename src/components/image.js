import React, { Component } from 'react';

class Image extends Component {
  render() {
     console.log(this.props.imgSource);
    return (
      <img  id="imageInFocus" src={this.props.imgSource} alt="lgo" />
    );
  }
}

export default Image;
