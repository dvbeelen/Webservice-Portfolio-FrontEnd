import React from 'react';
import { Card } from './Card'

export class Cases extends React.Component {
    constructor() {
        super()
        this.state = { 
            cases: []
        }
    }
        componentDidMount () {
            this.loadCases();
        }
    

    async loadCases() {
        const response = await fetch(`http://145.24.222.215:8000/cases`)
        const json = await response.json()
        console.log(json.items)
        this.setState({cases: json.items});
    } 

    render() {
        let thumbs = this.state.cases.map((singleCase, i) =>
            <Card key={i} name={singleCase.projectName} url={singleCase._links.self.href}></Card>
        )

        return (
            <div className="cases">
                <div className="thumbnails">
                    {thumbs}
                </div>
            </div>
        )   
    }
}