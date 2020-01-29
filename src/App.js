import React from 'react';
import './App.css';
import { Header } from './Header'
import { Footer } from './Footer'
import { Cases } from './Cases';

export default class App extends React.Component {
    constructor(){
      super()
      this.state ={
        params : window.location.pathname
      }
      console.log("App started")
      console.log(this.state.params)
    }
    render(){
      return(
        <div className="App">
          <Header />
          <Cases />
          <Footer />
        </div>
      )
    }
}