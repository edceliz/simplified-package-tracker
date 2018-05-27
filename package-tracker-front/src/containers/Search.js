import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    fetching: true,
    name: 'None',
    status: 'Package not found!',
    updated_at: 'None'
  }

  componentWillMount() {
    fetch('http://xdetracker.practice/api/package/' + this.props.match.params.id, {
      method: 'GET'
    }).then(res => res.json()).then(res => {
      if (res.status) {
        this.setState({
          fetching: false,
          ...res
        });
      } else {
        this.setState({
          fetching: false
        });
      }
    });
  }

  renderResult() {
    return (
      <div>
        <h2>Package #{this.props.match.params.id}</h2>
        <p>Package Name: {this.state.name}</p>
        <p>Current Status: {this.state.status}</p>
        <p>Last Update: {this.state.updated_at}</p>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  render() {
    return (
      <div className="result">
        { this.state.fetching ?
          <div className="loading">
            <h2>Tracking package #{this.props.match.params.id}...</h2>
            <Spinner className="spinner" name="circle" />
          </div> :
          this.renderResult()
        }
      </div>
    );
  }
}

export default Home;
