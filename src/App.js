import React from "react";
import { Component } from 'react';
import "./styles.css";
import Form from './components/Form'

class App extends Component {

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