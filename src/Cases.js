import React from 'react';
import axios from 'axios';
import Postform from './Postform';
import Details from './Details';
import Popup from "reactjs-popup";

export class Cases extends React.Component {
    constructor() {
        super()
        this.state = {        
            cases: [],
            currentPage: 1,
            casesPerPage: 5,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleClick(event) {

        this.setState({
          currentPage: Number(event.target.id)
        });
        this.forceUpdate();

    }

    _showForm = (bool) => {

        this.setState({
          showForm: bool
        });

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
    
    componentDidMount () {
        axios.get(`http://145.24.222.215:8000/cases`)
            .then(res =>{

                const response = res.data;
                this.setState({cases: response.items});

            })
            .catch(res => {

                console.log('API not responding.');

            })

    }

    render() {
        const { cases, currentPage, casesPerPage } = this.state;

        const indexOfLastCase = currentPage * casesPerPage;
        const indexOfFirstCase = indexOfLastCase - casesPerPage;
        const currentCases = this.state.cases.slice(indexOfFirstCase, indexOfLastCase);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(cases.length / casesPerPage); i++) {

          pageNumbers.push(i);

        };

        const renderPageNumbers = pageNumbers.map(number => {
            return (

              <li key={number} id={number} onClick={this.handleClick}>
                {number}
              </li>

            );
        });

        const displayCases = (
            <div className="cases">

                <div className="thumbnails">
                    {currentCases.map( i => {


                        return(
                            <div class={i._id}>
                                <h4>{i.projectName}</h4>
                                <span>{i.clientName}</span> <br></br>
                                <span>{i.summary}</span>
                                <br></br>
                                <div class="crudButtons">
                                    <Popup trigger={<button> Edit </button>} modal>
                                        <Postform id = {i._id} caseName = {i.projectName}/>
                                    </Popup>
                                    <button onClick={() => {this.deleteCase(i._id)}}>Delete this case</button>
                                    <Details 
                                        projectName={i.projectName} 
                                        clientName={i.clientName} 
                                        summary={i.summary} 
                                        description={i.description} 
                                    />
                                </div>
                            </div>  
                                        

                         )
                     })}
                </div>

                <div className="formButton">
                    <button onClick={this._showForm.bind(null, true)}>Add a brand new case</button>
                    { this.state.showForm && (
                    <div className="addCase">
                        <Postform />
                        <button onClick={this._showForm.bind(null, false)}>Close this now!</button>
                    </div>) }
                </div>

                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>

            </div>
        );

        const displayCasesEmpty = (
            <div className="noCasesMessage">

                <h1>Whoops, no dice!</h1>
                <p>The Cases-API failed to load the portfolio-cases. Maybe you forgot to turn the API on?</p>

            </div>
        );
        
        return( this.state.cases.length ? displayCases : displayCasesEmpty ); 

    }
}