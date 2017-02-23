console.log('Starting up the server');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}];

app.get('/fish', function(req, res){
  res.send(fishiesList);
});

app.post('/fish/new', function(req, res){

  var newFish = req.body;
  var contains = false;

  fishiesList.forEach(function(fishPoop){
    if(fishPoop.name ==  newFish.name){
      contains = true;
    }
  })
  
  if(newFish.name !== '' && !contains){
  console.log('new fish is:', newFish);
  fishiesList.push(newFish);
  res.sendStatus(200);
}

else {
  res.sendStatus(400);
  console.log('else statement');
}
});

// handle the request for the first fish
app.get('/fish/first', function(req, res){
  res.send(fishiesList[0]);
});

// handle the request for the first fish name
app.get('/fish/first/name', function(req, res){
  res.send(fishiesList[0].name);
});

// handle the request for the last fish
app.get('/fish/last', function(req, res){
  var lastIndex = fishiesList.length -1;
  res.send(fishiesList[lastIndex]);
});

// handle the request for the last fish name
app.get('/fish/last/name', function(req, res){
  var lastIndex = fishiesList.length -1;
  res.send(fishiesList[lastIndex].name);
});


app.listen(5000);
