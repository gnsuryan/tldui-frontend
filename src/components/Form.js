import React, { Component } from 'react';
import './Form.css';

import Release from './Release';
import RunType from './RunType';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'; 
import ReactTable from "react-table";  
import {MatTable} from "./MatTable";

class Form extends Component {
 
 constructor(props) {
    super(props);
    this.state = {release:'', previousRunType: '',currentRunType:'',tableData:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.tableElement = React.createRef();
	this.previousRunType = React.createRef();
	this.currentRunType = React.createRef();
  }

  handleChange(event) {
    
	if(event.type)
	{
		switch (event.type)
		{
			case "previousRunType":  this.setState({previousRunType: event.value}); 
									 break;

			case "currentRunType":   this.setState({currentRunType: event.value}); 
									 break;

			case "release":			 this.setState({release: event.value});
									 alert(event.value);
									 this.previousRunType.current.setRelease(event.value); 
									 this.currentRunType.current.setRelease(event.value)
									 break;

			default: console.log('invalid type: '+event.type);
		}
	}
  }

  handleSubmit(event) {
	this.submitFormDataToServer();
	event.preventDefault();
  }


  async submitFormDataToServer()
  {
	//const res = await axios.get(`http://gnsuryan-1.subnet1ad3phx.devweblogicphx.oraclevcn.com:8099/runtype_regression_report/14.1.2.0.0/nightly-13/nightly-14`, {crossDomain: true})
	const res = await axios.get(`http://gnsuryan-1.subnet1ad3phx.devweblogicphx.oraclevcn.com:8099/runtype_regression_report/${this.state.release}/${this.state.previousRunType}/${this.state.currentRunType}`, {crossDomain: true})
	const data = res.data
	this.setState({tableData: data});
	console.log('response: '+this.state.tableData);
	
	
  }

  canBeSubmitted() {
  const { currentRunType, previousRunType, release } = this.state;
  return (
    currentRunType !==  '' &&  previousRunType !== '' && release !== ''
  );
}


  
 render () {

    const isEnabled = this.canBeSubmitted();

	return (
	 <form onSubmit={this.handleSubmit}>
	   <div align="center"><h4>Regression Report</h4></div>
       <div>
		 <Container>
		  <Row>
			<Col>Release</Col>
			<Col>Previous Run Type</Col>			
			<Col>Current Run Type</Col>
			<Col></Col>
		  </Row>
		  <Row>
			<Col><Release pagename={this.props.pagename} onChange={this.handleChange}/></Col>
			<Col><RunType ref={this.previousRunType} name="previousRunType" pagename={this.props.pagename} onChange={this.handleChange}/></Col>
	        <Col><RunType ref={this.currentRunType} name="currentRunType" pagename={this.props.pagename} onChange={this.handleChange}/></Col>
			<Col><button type="submit" className="btn btn-primary" >Generate Report</button></Col>
		  </Row>
	     </Container>
	   </div>
	   <div>
	     <p></p>
	   </div>	   
	   
     </form>

  )
 }
}
export default Form;
