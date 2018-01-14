import React, { Component } from 'react';
import './../style/header.css';
import Logo from './../imgs/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header"><img src={Logo} alt="lgo"/>
         <h1>   PicAasu</h1>
      </div>
    );
  }
}

export default Header;
