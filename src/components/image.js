import React, { Component } from 'react';
import './../style/image.css';
import toedit from './../imgs/test.jpg';

class Header extends Component {
  render() {
    return (
      <div className="Image"><img src={toedit} alt="lgo" />
      </div>
    );
  }
}

export default Header;
