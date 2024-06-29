// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

// import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {login: false}

  logHimOut = () => {
    this.setState({login: true})
  }

  logHimIn = () => {
    this.setState({login: false})
  }

  render() {
    const {login} = this.state
    return (
      <div className="cont-1">
        <div className="cont-2">
          {login ? <Message login={login} /> : <Message login={login} />}
          {login ? (
            <Logout toggle={this.logHimIn} />
          ) : (
            <Login toggle={this.logHimOut} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
