import React from 'react';
import axios from 'axios';

export default class Postform extends React.Component {
  state = {
    projectName: '',
    clientName: '',
    summary: '',
    description: '',
  }

  handleChange = event => {
    this.setState({ 
        projectName: event.target.value,
        clientName: event.target.value,
        summary: event.target.value,
        description: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

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

    axios.post(`http://145.24.222.215:8000/cases`, json, config)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status !== 400){
          console.log('POST Send.')
        } else {
          console.log('POST Not Send.')
        }
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Project Name:
            <input type="text" name="projectName" onChange={this.handleChange} />
          </label>
          <br></br>

          <label>
            Client Name:
            <input type="text" name="clientName" onChange={this.handleChange} />
          </label>
          <br></br>

          <label>
            Summary:
            <input type="text" name="summary" onChange={this.handleChange} />
          </label>
          <br></br>

          <label>
            Description:
            <input type="text" name="description" onChange={this.handleChange} />
          </label>
          <br></br>

          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}