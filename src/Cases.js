import React from 'react';
import { Card } from './Card'
import axios from 'axios';

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
        axios.get(`http://145.24.222.215:8000/cases`)
            .then(res =>{
                const response = res.data;
                if (!response){
                    console.log('API not responding.')
                } 
                this.setState({cases: response.items});
            })          
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