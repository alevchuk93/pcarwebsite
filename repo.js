var cars = require('./cars.js');

var flatfile = require('flat-file-db');
var db = flatfile('./mycars.js');
 

db.on('open', function() {
    db.put('cars', cars);  // store some data 
    console.log(db.get('cars')) // prints {world:1} 

});