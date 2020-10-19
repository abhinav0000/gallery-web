const express = require ("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));  //PUBLIC --> static files (css) --> link in ejs file /folder/file which are inside the public directory

app.get("/", function(req,res){
	res.render('home');
});

app.get("/about", function(req,res) {
	res.render('about');
});

//render error template on any other requested route
// app.get("*", function(req, res){
// 	res.render('error');           
// });

//Server 
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server running on Port 3000 !");
});