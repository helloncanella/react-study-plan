console.log("connected");

$(document).ready(function(){
	var result = gradeTable();
	$(result).insertAfter(".weekdays");
})


function gradeTable(){

	let option = `<td><select id="subject" name="subject">
		<option disabled selected value> -- </option>
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
	</select></td>`
	let html = "";

	for(i=1;i<=5;i++){
		html = html + option;
	}

	html = "<tr>" + html + "</tr>"

	let htmlrow = "";
	for(x=0;x<=5;x++){
		htmlrow = htmlrow + html
	}
	return htmlrow
}