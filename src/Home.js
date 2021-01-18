import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      submitted: false
    };
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  setUsername() {
    this.setState({
      submitted: true
    })
  }

  render() {
    const { submitted, username } = this.state;

    return (
      <div className='body'>
        {submitted ? (
          <p>Welcome, {username}</p>
        ) : (
          <p>
            <label>Enter your username:</label>
            <input type='text' onChange={this.updateUsername.bind(this)} />
            <button onClick={this.setUsername.bind(this)}>Submit</button>
          </p>
        )}

        <p>Go to <Link to='/page2'>page 2</Link></p>
      </div>
    );
  }
}

export default Home;