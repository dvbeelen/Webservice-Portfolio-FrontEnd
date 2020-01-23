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
        if (res.status === 200){
          console.log('POST Send.')
        } else {
          console.log('POST Not Send.')
        }
      })
  }

  render() {
    
    return (

      <div>
        <h2> Add a new Case</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Project Name:
            <input type="text" name="projectName" value={this.state.value} onChange={this.handleProjectNameChange} />
          </label>
          <br></br>

          <label>
            Client Name:
            <input type="text" name="clientName" value={this.state.value} onChange={this.handleClientNameChange} />
          </label>
          <br></br>

          <label>
            Summary:
            <input type="text" name="summary"  value={this.state.value} onChange={this.handleSummaryNameChange} />
          </label>
          <br></br>

          <label>
            Description:
            <input type="text" name="description" value={this.state.value} onChange={this.handleDescriptionChange} />
          </label>
          <br></br>

          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}