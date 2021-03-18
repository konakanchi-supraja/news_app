/*import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      isLoaded:false,
    }
  }
  componentDidMount() {
    
    fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-02-18&sortBy=publishedAt&apiKey=API_KEY')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }
  render() {
    var { isLoaded, items} = this.state;
    if(!isLoaded) {
      return <div>Loading....</div>;
    }
    else {
      return (
        <div className="App">
          data has been loaded.
        </div>
        )
    }
  }
}

export default App;*/
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
//import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./App.css";

function App() {
  return (
      <News />
  );
}

export default App;
