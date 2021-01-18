import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      nextUsername: '',
      username: 'default user'
    };
  }

  updateUsername(e) {
    this.setState({
      nextUsername: e.target.value
    })
  }

  setUsername() {
    this.setState({
      username: this.state.nextUsername
    })
  }

  render() {
    const { username } = this.state;

    return (
      <div className='body'>
        <p>Welcome, {username}</p>

        <div>
          <label>Change your username:</label>
          <input type='text' onChange={this.updateUsername.bind(this)} />
          <button onClick={this.setUsername.bind(this)}>Submit</button>
        </div>

        <p>Click <Link to='/page2'>here</Link> to go to page 2, {username}</p>
      </div>
    );
  }
}

export default Home;