import {Component} from 'react'
import Welcome from './Welcome'

class App extends Component {
  state = {isLoggedIn: true}
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" />
      </div>
    )
  }
}

export default App
