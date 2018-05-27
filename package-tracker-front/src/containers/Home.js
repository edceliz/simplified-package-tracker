import React, { Component } from 'react';

import whiteLogo from '../images/logo-white.png';
import logo from '../images/logo.png';

class Home extends Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.history.push('/track/' + this.trackingNumber.value);
  }

  render() {
    return (
      <div className="search">
        <div className="overlay">
          <div className="overlay-color" />
        </div>
        <div className="main-logo">
          <img src={whiteLogo} alt="White XDE Logo"/>
        </div>
        <div className="quote">
          <p>IT'S ABOUT TIME!</p>
        </div>
        <div className="search-box">
          <form onSubmit={this.onSubmit.bind(this)}>
            <img src={logo} alt="XDE Logo"/>
            <h3>TRACK YOUR ORDER</h3>
            <label htmlFor="trackingNumber">ENTER YOUR TRACKING NUMBER TO GET LATEST STATUS OF THE PACKAGE</label>
            <input type="number" id="trackingNumber" placeholder="TRACKING NUMBER" ref={el => this.trackingNumber = el} />
            <button type="submit">🔍</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
