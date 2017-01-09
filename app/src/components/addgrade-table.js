import React, { Component } from 'react';
import AddGradeRow from "./addgrade-row";


class AddGradeTable extends Component {

	getFinalGrades(){
		
	};

	renderTable(){
		const numCol = [0,1,2,3,4];
  		const numRow = [0,1,2,3,4,5];

		return numRow.map((numrow) => {
			return (<tr key={numrow}>
				{numCol.map((numcol) => {
					return (<AddGradeRow key={"numcol" + numcol} numcol={numcol} numrow={numrow} />)
				})}
			</tr>)
		})
	}

  render() {
  	console.log(this.props.creation);
  	if(this.props.creation){
  		this.getFinalGrades();
  	}
    return (
    <div className="mainbox">
		<table className="table">
			<thead>
				<tr>
					<th>Segunda</th>
					<th>Terça</th>
					<th>Quarta</th>
					<th>Quinta</th>
					<th>Sexta</th>
				</tr>
			</thead>
			<tbody className="weekdays">
				{this.renderTable()};
			</tbody>	
		</table>
		<p>

		</p>
    </div>
    )
  }
}

export default AddGradeTable;