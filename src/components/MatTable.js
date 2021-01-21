import React, { Component } from 'react' 
import { makeStyles } from '@material-ui/core/styles';  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow'; 
import Paper from '@material-ui/core/Paper';  
import axios from 'axios';


export class MatTable extends Component {  

  constructor(props) {  
    super(props)
    this.state = {  
      tableData: (this.props.tableData? this.props.tableData: [])
    }
  }  

  setTableData = (data) => {
	this.setState({tableData: data});
  }


  render() {  

	const tableData =this.props.tableData? this.props.tableData: [];
	console.log(tableData);

    return ( 
	  <div>
      <TableContainer component={Paper}>  
        <Table stickyHeader  aria-label="sticky table">  
          <TableHead>  
            <TableRow>  
              <TableCell align="center">Team</TableCell>  
              <TableCell align="center">Run Key</TableCell>  
              <TableCell align="center">Risk Category</TableCell>  
              <TableCell align="center">Test Status</TableCell>  
              <TableCell align="center">Testcase Logical Name</TableCell>  
            </TableRow>  
          </TableHead>  
          <TableBody>  
            {  
				this.state.tableData.map((p, index) => {  
                return <TableRow key={index}>  
                  <TableCell align="left">{p.TEAM}</TableCell>  
                  <TableCell align="left">{p.RUN_KEY}</TableCell>  
                  <TableCell align="left">{p.RISK_CATEGORY}</TableCell>  
                  <TableCell align="left">{p.TEST_STATUS}</TableCell>  
                  <TableCell align="left">{p.TEST_CASE_LOGICAL_NAME}</TableCell>  
                </TableRow>  
              })  
            }  
          </TableBody>  
        </Table>  
      </TableContainer>  
	  </div>
    );  
  }  
}  
  
export default MatTable
