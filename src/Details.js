import React from 'react';
import Popup from "reactjs-popup";



export default class Details extends React.Component{

    render() {
    
            return (
                <Popup trigger={<button> Details </button>} modal>
                <div>
                    <b>Case Number:</b> 
                    <br></br>
                    {this.props.id} 
                    <br></br>
                    <b>Name of the project:</b> 
                    <br></br>
                    {this.props.projectName} 
                    <br></br>
                    <b>I made this for:</b> 
                    <br></br>
                    {this.props.clientName} 
                    <br></br>
                    <b>Short summary / Tagline :</b> 
                    <br></br>
                    {this.props.summary} 
                    <br></br>
                    <b>The complete story:</b> 
                    <br></br>
                    {this.props.description} <br></br>
                    <br></br>
                </div>
                </Popup>
            );
        }
    }


