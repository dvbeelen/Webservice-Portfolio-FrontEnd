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
                const response = res.data;
                this.setState({cases: response.items});
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
            <div class="routerDetails">
                <p><b>Project ID:</b></p>
                {this.state.cases._id} <br></br>
                <p><b>Name of the project:</b></p>
                {this.state.cases.projectName} <br></br>
                <p><b>The client I made this for:</b></p>
                {this.state.cases.clientName} <br></br>
                <p><b>Short summary / Tagline :</b></p>
                {this.state.cases.summary} <br></br>
                <p><b>The complete story:</b></p>
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