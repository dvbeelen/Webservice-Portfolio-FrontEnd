import React from 'react';
import { Card } from './Card'
import axios from 'axios';
import Postform from './Postform';

export class Cases extends React.Component {
    constructor() {
        super()
        this.state = { 
            
            cases: []
        }
    }
    _showForm = (bool) => {
        this.setState({
          showForm: bool
        });
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
            <div class="cases">
                <div class="thumbnails">
                    {thumbs}
                </div>
                <div class="formButton">
                    <button onClick={this._showForm.bind(null, true)}>Add a brand new case</button>
                    { this.state.showForm && (<Postform />) }
                </div>
              
            </div>
        )   
    }
}