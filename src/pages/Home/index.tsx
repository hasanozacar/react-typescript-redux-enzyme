import React, { Component } from 'react';
import './style.scss';
import logo from '../../global/assets/home.jpeg'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Home Page</h1>
        <a className="logo" href="/units">
          <img
            src={logo}
            className="logo-container"
            alt="Logo" />
        </a>
      </div>
    );
  }
}