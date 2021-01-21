import React, { Component } from 'react';
import Select from 'react-select';
import Team from './components/Team'
import Release from './components/Release'
import BuildLabel from './components/BuildLabel'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 

class SubmitForm extends Component {

	constructor(props) {
        super(props);
        this.state = {criteria: ''};    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({criteria: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        // only submit the search if there is search criteria
        if (this.state.criteria.length > 0){
            // I need to be able to set some state here
            this.setState({
                   .....
            });
            // i also need to access this.props here
            if (this.props......) ...
        }
    }

	render() {
        return (
			<form onSubmit={this.handleSubmit} >
			<h3><b>Testlogic on Docker Reports</b></h3>
			<table width="900px">
			  <tr>
				<td>Team</td>
				<td>Release</td>
				<td>Build</td>
				<td></td>
			  </tr>
			  <tr>
				<!--<td><Team pagename={this.props.pagename} style={{width: 50}}/></td>
				<td><Release pagename={this.props.pagename}/></td>
				<td><BuildLabel pagename={this.props.pagename}/></td>
				-->
				<td><input type=submit name="getReports"/></td>
			  </tr>
			</table>
            </form>
        );
    }

  
}

export default SubmitForm