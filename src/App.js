import React from 'react';
import './App.css';
import { Header } from './Header'
import { Footer } from './Footer'
import { Cases } from './Cases';

export default class App extends React.Component {
    constructor(){
      super()
      console.log("App started")
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