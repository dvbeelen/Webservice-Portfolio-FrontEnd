import React from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";

export class routeDetail extends React.Component{
    constructor() {
        super()
        this.state = {        
            cases: []
        }
    }

    componentDidMount () {
        let queryString = `http://145.24.222.215:8000/cases/${this.props.match.params.id}`
        console.log(queryString)
        axios.get(queryString)
            .then(res =>{
                console.log(res.data)
                this.setState({cases: res.data});
            })
            .catch(res => {

                console.log('API not responding.');

            })

    }

    render() {
        if (this.state.cases){
            console.log(this.state.cases)
        return ( 
            <Popup defaultOpen modal>
                   <div>
                    <b>You Inserted Case Number:</b> 
                    <br></br>
                    {this.state.cases._id} 
                    <br></br>
                    <b>Name of the project:</b> 
                    <br></br>
                    {this.state.cases.projectName} 
                    <br></br>
                    <b>I made this for:</b> 
                    <br></br>
                    {this.state.cases.clientName} 
                    <br></br>
                    <b>Short summary / Tagline :</b> 
                    <br></br>
                    {this.state.cases.summary} 
                    <br></br>
                    <b>The complete story:</b> 
                    <br></br>
                    {this.state.cases.description} <br></br>
                    <br></br>
                </div>
            </Popup>
          )

        } else {
            return(
                <Popup defaultOpen modal>
                <div class="routerDetails">
                    <div> That ID gave no results. Sorry!</div>
                </div>
                </Popup>
            )
        }
    } 
  }