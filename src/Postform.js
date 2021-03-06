import React from 'react';
import axios from 'axios';

export default class Postform extends React.Component {
  state = {
    projectName: '',
    clientName: '',
    summary: '',
    description: '',
  }

  handleProjectNameChange = e => {
    this.setState({ projectName: e.target.value,
    });
  }

  handleClientNameChange = e => {
    this.setState({ clientName: e.target.value,
    });
  }

  handleSummaryNameChange = e => {
    this.setState({ summary: e.target.value,
    });
  }

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value,
    });
  }

  handleSubmit = event => {
    console.log(this.props.id)
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
      }

    let data = {
      projectName: this.state.projectName,
      clientName: this.state.clientName,
      summary: this.state.summary,
      description: this.state.description,
    };

    var json = JSON.stringify(data);
    console.log(json)
    
    if(!this.props.id){
      axios.post(`http://145.24.222.215:8000/cases`, json, config)
        .then(res => {
          if (res.status === 200){
            console.log('POST Send.')
          } else {
            console.log('POST Not Send.')
          }
      })
    }
    else{
      axios.put(`http://145.24.222.215:8000/cases/${this.props.id}`, json, config)
        .then(res => {
          if (res.status === 200){

            console.log('POST Send.')
          } else {
            console.log('POST Not Send.')
          }
        })
      }
    }
  
  render() {
    if(!this.props.id){
      return (
        <div>
        <h2> Add a new Case </h2>
        <form onSubmit={this.handleSubmit}>
          <label>Project Name:</label><br></br>
          <input type="text" name="projectName" value={this.state.value} onChange={this.handleProjectNameChange} />
          <br></br>

          <label>Client Name:</label> <br></br>
          <input type="text" name="clientName" value={this.state.value} onChange={this.handleClientNameChange} />
          <br></br>

          <label>Summary: </label><br></br>
            <input type="text" name="summary"  value={this.state.value} onChange={this.handleSummaryNameChange} />
          <br></br>

          <label>Description: </label><br></br>
          <textarea rows="10" cols="70" name="description" value={this.state.value} onChange={this.handleDescriptionChange} />
          <br></br>

          <button type="submit">Add</button>
        </form>
        <br></br>
      </div>
      )
    } else{ 
      return (
        <div>
          <h2> Update {this.props.caseName}: </h2>
          <form onSubmit={this.handleSubmit}>
            <label>Improved Project Name:</label><br></br>
            <input type="text" name="projectName" value={this.state.value} onChange={this.handleProjectNameChange} />
            <br></br>
  
            <label>Improved Client Name:</label> <br></br>
            <input type="text" name="clientName" value={this.state.value} onChange={this.handleClientNameChange} />
            <br></br>
  
            <label>Improved Summary: </label><br></br>
              <input type="text" name="summary"  value={this.state.value} onChange={this.handleSummaryNameChange} />
            <br></br>
  
            <label> Improved Description: </label><br></br>
            <textarea rows="10" cols="70" name="description" value={this.state.value} onChange={this.handleDescriptionChange} />
            <br></br>
  
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }  
}