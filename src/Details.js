import React from 'react';
import Popup from "reactjs-popup";



export default class Details extends React.Component{

    render() {
        console.log(this.props)
            return (
                <Popup trigger={<button> Details </button>} modal>
                <div>
                    <p><b>Project ID:</b></p>
                    {this.props.id} <br></br>
                    <p><b>Name of the project:</b></p>
                    {this.props.projectName} <br></br>
                    <p><b>The client I made this for:</b></p>
                    {this.props.clientName} <br></br>
                    <p><b>Short summary / Tagline :</b></p>
                    {this.props.summary} <br></br>
                    <p><b>The complete story:</b></p>
                    {this.props.description} <br></br>
                    <br></br>
                </div>
                </Popup>
            );
        }
    }


