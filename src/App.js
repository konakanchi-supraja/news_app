import React, { Component } from 'react';
import {Provider} from "react-redux"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news:[]
    }
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {

  }
  render() {
    return (
      <div>
        <button onClick={this.fetchData}
        >
          fetch news
        </button>
        <div>
          
        </div>
      </div>
    )
  }
}

export default App;
