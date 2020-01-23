import React from 'react';
import axios from 'axios';
import Postform from './Postform';

export class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cases: [],
        }
    }

    _showDetails = (bool) => {
        this.setState({
          _showDetails: bool
        });
    }
    
    _showEdit= (bool) => {
        this.setState({
          _showEdit: bool
        });
    }

    deleteCase(id){
        if (window.confirm('Are you sure you want to delete this case?')) {
            axios.delete(`http://145.24.222.215:8000/cases/${id}`)
            console.log('Case removed.')
            window.location = window.location.href
        } else {
            console.log('Case not removed.')
        }
       
    }
    componentDidMount() {
      this.loadDetails()
    }

    async loadDetails(){
        const response = await fetch(this.props.url)
        const json = await response.json()
        this.setState({ 
            id: json._id, 
            projectName: json.projectName, 
            clientName: json.clientName,
            summary: json.summary, 
            description: json.description         
        })
    }

    render() {
        return (
            <div className="card">
                <div><b>{this.state.projectName}</b></div>
                <div>
                    Summary: {this.state.summary} <br/>
                    Client: {this.state.clientName}
                </div>
                <div>
                    <button onClick={this._showEdit.bind(null, true)}>Edit this case</button>      
                    <button onClick={this._showDetails.bind(null, true)}>Show the details</button>
                    <button onClick={() => {this.deleteCase(this.state.id)}}>Delete this case</button>
                        { this.state._showDetails && (
                            <div class="caseDetails">
                                <span><b>What is it called?</b> {this.state.projectName} </span>
                                <br></br>
                                <span><b>Who is it for?</b> {this.state.clientName}</span>
                                <br></br>
                                <span><b>Give me a quick summary:</b> {this.state.summary}</span>
                                <br></br>
                                <span><b>Give me the whole story:</b> {this.state.description}</span>
                                <br></br>
                                <button onClick={this._showDetails.bind(null, false)}>Close this now!</button>
                            </div>
                        ) }     
                        { this.state._showEdit && (
                            <div className="editForm">
                                <Postform id={this.state.id} name={this.state.projectName}></Postform>
                                <button onClick={this._showEdit.bind(null, false)}>On second thougt, let's not change it.</button>
                            </div>
                         ) }                
                </div>               
            </div>
        );
    }
}