import React, { Component } from 'react';
import ImagetoEdit from './../imgs/test.jpg';

class Header extends Component {
  render() {
    return (
      <img  id="image" src={ImagetoEdit} alt="lgo" />
    );
  }
}

export default Header;
