import React from 'react';
import Popup from "reactjs-popup";

export default class Footer extends React.Component{
    render() {
      return (
        <Popup trigger={<button> Details </button>} modal>
        <div>
            {this.props.projectName} <br></br>
            {this.props.clientName} <br></br>
            {this.props.summary} <br></br>
            {this.props.description} <br></br>
        </div>
        </Popup>
      );
    }
  }

