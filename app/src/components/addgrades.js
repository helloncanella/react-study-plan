import React, { Component } from 'react';
import axios from "axios";
import AddGradeHeader from "./addgrade-header";
import AddGradeTable from "./addgrade-table";

class AddGrades extends Component {
	constructor(props){
		super(props);
		this.state = {creation: false};
		this.buttonClicked = this.buttonClicked.bind(this);
	}


 	buttonClicked(){
			// this.onajaxrequest();
			console.log("helloworld");
			this.setState({creation:true});
			//it should have something here to redirect to other page
	}

  	render() {
	// this.onajaxrequest =  function ajaxrequest(){
//  		axios.get("http://localhost:3001/", {
//  			params: {
//  				ID: 1234
//  			}
//  		}).then(function(response){
//  		})
//  	}

	    return (
	    <div className="mainbox">
	    	<div className="bloco">
				<AddGradeHeader />
				<AddGradeTable creation={this.state.creation}/>
					<button id="finalizar" onClick={this.buttonClicked}>Criar grade curricular da turma</button>
				</div>
			</div>
	    );
  	}
}

export default AddGrades;