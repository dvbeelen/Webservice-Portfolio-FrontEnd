import React from 'react';
import axios from 'axios';

export class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cases: [],
        }
    }

    deleteCase(id){
        axios.delete(`http://145.24.222.215:8000/cases/${id}`)
        console.log('Case removed.')
    }
    componentDidMount() {
      this.loadDetails()
    }

    async loadDetails(){
        const response = await fetch(this.props.url)
        const json = await response.json()
        this.setState({ 
            id: json._id, 
            projectName: 
            json.projectName, 
            summary: json.summary, 
            clientName: json.clientName,
            link: json._links.self.href})
    }

    render() {
        return (
            <div className="card">
                <div><b>{this.state.projectName}</b></div>
                <div>
                    id: {this.state.id} <br></br>
                    link: {this.state.link}<br></br>
                    Summary: {this.state.summary} <br/>
                    Client: {this.state.clientName}
                </div>
                <div>
                    <button><a href={this.state.link}>Read more </a></button>
                    <button>Edit Case</button>
                    <button onClick={() => {this.deleteCase(this.state.id)}}>Delete Case</button>
                </div>
                
            </div>
        );
    }
}