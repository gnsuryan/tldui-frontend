import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 

class RunType extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      label: '',
      value: '',
	  type: (this.props.name != null? this.props.name: "runtype"),
      release: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  setRelease = (strRelease) => {
	this.state.release=strRelease;
	this.getOptions();
  }
  
  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
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

  componentWillReceiveProps(props) {
    if (props.value === '') {
      this.setState.value='';
      this.setState.label='';
    }
  }

   async getOptions(){

	let res;

	/*if(this.state.release != '')
		res = await axios.get(`http://gnsuryan-1.subnet1ad3phx.devweblogicphx.oraclevcn.com:8099/runtypes/${this.state.release}`,{ crossdomain: true })
    else
		res = await axios.get('http://gnsuryan-1.subnet1ad3phx.devweblogicphx.oraclevcn.com:8099/runtypes/',{ crossdomain: true })*/

        res = await axios.get('http://gnsuryan-1.subnet1ad3phx.devweblogicphx.oraclevcn.com:8099/runtypes/',{ crossdomain: true })

	console.log(res);

	const data = res.data

	if(data == 'query send no rows')
	{
		this.setState({selectOptions: [],label:'',value:''})
	}
	else
	{
	    const options = data.map(d => ({
			"value" : d.RUN_TYPE,
			"label" : d.RUN_TYPE
		}))
		this.setState({selectOptions: options});
	}
  }

  componentDidMount(){
      this.getOptions()
  }

  
}

export default RunType
