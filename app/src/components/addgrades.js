import React, { Component } from 'react';
import axios from "axios";

class AddGrades extends Component {
  render() {

	this.onajaxrequest =  function ajaxrequest(){
  		axios.get("http://localhost:3001/", {
  			params: {
  				ID: 1234
  			}
  		}).then(function(response){
  			console.log(response);
  		})

  	}


    return (
    <div className="mainbox">
    	<div className="bloco">
			<div>
				<label>Ano da turma: </label>
					<select id="year">
	  					<option value="1">1 ano</option>
	  					<option value="2">2 ano</option>
	  					<option value="3">3 ano</option>
	  					<option value="4">4 ano</option>
	  					<option value="5">5 ano</option>
	  					<option value="6">5 ano</option>
	  					<option value="7">7 ano</option>
	  					<option value="8">8 ano</option>
	  					<option value="9">9 ano</option>
	  					<option value="10">1 série</option>
	  					<option value="11">2 série</option>
	  					<option value="12">3 série</option>
					</select>
				<div>
					<label>Número da Turma:</label>
				 	<input type="text" id="classnumber" required />
				 </div>
				<div id="eventContent" title="Event Details">
				    <div id="eventInfo"></div>
				</div>
				<div>
					<label>Horário de aula: </label>
					<select>
						<option value="manha1">7h30 até 11h30</option>
						<option value="manha2">8h30 até 12h30</option>
						<option value="tarde">13h00 até 17h30</option>
					</select>
				</div>
				<div>
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
						</tbody>	
					</table>
				</div>
				<button id="finalizar" onClick={this.onajaxrequest()}>Criar grade curricular da turma</button>
			</div>
		</div>
    </div>
    );
  }
}

export default AddGrades;