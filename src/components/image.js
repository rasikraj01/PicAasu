import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <img  id="image" src={this.props.imgSource} alt="lgo" />
    );
  }
}

export default Header;
