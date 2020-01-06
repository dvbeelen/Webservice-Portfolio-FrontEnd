import React from 'react';
import './App.css';
import { Header } from './Header'
import { Footer } from './Footer'

export default class App extends React.Component {
    constructor(){
      super()
      console.log("yo")
    }
    render(){
      return(
        <div className="App">
          <Header />
          <Footer />
        </div>
      )
    }
}