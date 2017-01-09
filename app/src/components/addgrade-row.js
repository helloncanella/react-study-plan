import React, { Component } from 'react';


class AddGradeRow extends Component {

  render() {
  	// console.log(this.props);
    return (
    <td>
		<select key={"numcol" + this.props.numcol} id="subject" name="subject" onChange={this.props.onSelectOption}>
			<option defaultValue> -- </option>
				<option value="mat">Matemática</option>
				<option value="por">Português</option>
				<option value="cie">Ciências</option>
				<option value="geo">Geografia</option>
				<option value="his">História</option>
				<option value="ing">Inglês</option>
				<option value="esp">Espanhol</option>
				<option value="qui">Química</option>
				<option value="soc">Sociologia</option>
				<option value="bio">Biologia</option>
				<option value="fis">Física</option>
				<option value="art">Artes</option>
				<option value="fil">Filosofia</option>
		</select>
	</td>
    );
  }
}

export default AddGradeRow;
