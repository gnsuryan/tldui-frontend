import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import Team from './components/Team'
import Release from './components/Release'
import BuildLabel from './components/BuildLabel'

import logo from './logo.svg';
import './App.css'
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';
import Button from 'react-bootstrap/Button';



class App extends Component {

  /*constructor(props){
    super(props);
	
	this.state = {
		team: '',
		release: '',
		build: ''
	}

	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }*/

 
/*  handleChange(e) {
	alert('here in app: '+e);
	//alert(event.target);
 }
 */

handleSubmit(event) {
	alert('submitted: ' + eval(this.state));
	event.preventDefault();
}


  handleChange = (event) => {
	alert(event);
    event.preventDefault();
  }


   render() {

    return (
    <div>  
		<div className="App-header">
          <h2>Testlogic on Docker Reports</h2>
		</div>
		<Form />
	</div>
    )
  }
}

export default App