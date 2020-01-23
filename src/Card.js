import React from 'react';
import axios from 'axios';

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
                    <button><a href={'http://localhost:3000/' + this.state.id}>Read more </a></button>
                    <button onClick={this._showDetails.bind(null, true)}>Show details</button>
                    <button onClick={() => {this.deleteCase(this.state.id)}}>Delete Case</button>
                        { this.state._showDetails && (
                            <div class="caseDetails">
                                <span>What is it called? {this.state.projectName} </span>
                                <br></br>
                                <span>Who is it for? {this.state.clientName}</span>
                                <br></br>
                                <span>Give me a quick summary: {this.state.summary}</span>
                                <br></br>
                                <span>Give me the whole story: {this.state.description}</span>
                                <br></br>
                                <button onClick={this._showDetails.bind(null, false)}>Close this now!</button>
                            </div>
                        ) }
                    
                </div>
                
            </div>
        );
    }
}