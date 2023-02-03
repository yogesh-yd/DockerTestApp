var exp=require('express');
var app=exp();

var path=require('path');


app.use(exp.static(path.join(__dirname,'public')));


app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 });

app.get('/hello', function(req,res){
    var info={fname:"ABC", lname:"XYZ", Total:26}
    res.send(info);
});

 var server = app.listen(8800, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server started at http://localhost:8800", host, port)
});