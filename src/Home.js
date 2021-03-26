import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trans, withTranslation } from 'react-i18next';

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
    const { t } = this.props;

    return (
      <div className='body'>
          <p>{t('welcome', {username: username})}</p>

          <div>
            <label>{t('change-username')}</label>
            <input type='text' onChange={this.updateUsername.bind(this)} />
            <button onClick={this.setUsername.bind(this)}>
              {t('submit')}
            </button>
          </div>

        <p>
          <Trans i18nKey='go-to-page2'>
            <Link to='/page2'></Link>
            {{username}}
          </Trans>
        </p>
      </div>
    );
  }
}

export default withTranslation()(Home);
