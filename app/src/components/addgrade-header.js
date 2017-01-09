import React, { Component } from 'react';


class AddGradeHeader extends Component {
  render() {
    return (
    <div className="mainbox">
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
			</div>
    </div>
    );
  }
}

export default AddGradeHeader;