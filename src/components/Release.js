import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 

class Release extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      label: '',
      value: '',
	  type: (this.props.name != null? this.props.name: "release")
    }
    this.handleChange = this.handleChange.bind(this);
  }

  
  render() {
    console.log(this.state.selectOptions)
    return (
      <div style={{width: '200px'}}>
        <Select options={this.state.selectOptions} onChange={this.handleChange}/>
      </div>
    )
  }

  handleChange = (event) => {
	  this.state.label=event.label;
	  this.state.value=event.value;

      if (this.props.onChange) {
        this.props.onChange(this.state);
     }
  }

   async getOptions(){
    const res = await axios.get('http://gnsuryan-1.subnet1ad3phx.devweblogicphx.oraclevcn.com:8099/releases/',{ crossdomain: true })
    const data = res.data

	console.log(res);

    const options = data.map(d => ({
      "value" : d.RELEASE,
      "label" : d.RELEASE
    }))
    this.setState({selectOptions: options})
  }

  componentDidMount(){
      this.getOptions()
  }

  
}

export default Release