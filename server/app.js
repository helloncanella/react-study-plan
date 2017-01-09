var express = require("express"),
 	app = express(),
	mongoose= require("mongoose"),
	bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/planstudy");
mongoose.Promise = global.Promise; 

///// Gravar itens no BD
var gradeSchema = new mongoose.Schema({
year: String,
class: String,
grades: []
})

var Grade = mongoose.model("Grade",gradeSchema);


//============================
// ROUTERS
//============================
app.get("/", function(req,res){
	Grade.find({},function(err,grades){
		if(err){
			console.log("deuruim /");
		} else {
		res.send("hello");
		}
	})

});

app.post("/add",function(req,res){

	Item.findByIdAndRemove(itemtodelete,function(err){
		if(err){
			console.log("deu ruim delete");
		}
	});
});


//============================
// CONFIG: Express, ejs & Body Parser
//============================
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/controllers"));

app.listen(3001, process.env.IP, function(){
   console.log("ToDos tá no ar"); 
});