import React from 'react';

export class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cases: [],
        }
    }

    componentDidMount() {
      this.loadDetails()
    }

    async loadDetails(){
        console.log(this.props.url)
        const response = await fetch(this.props.url)
        const json = await response.json()
        console.log(json)
        this.setState({ projectName: json.projectName, summary: json.summary, clientName: json.clientName })
    }
    render() {
        return (
            <div className="card">
                <div>{this.state.projectName}</div>
                <div>
                    Summary: {this.state.summary} <br/>
                    Client: {this.state.clientName}
                </div>
                <div><button>Read more</button></div>
            </div>
        );
    }
}