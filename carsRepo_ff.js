var cars = require('./cars.js');

var flatfile = require('flat-file-db');
var db = flatfile('./mycars.js');
 

db.on('open', function() {
    console.log('ready') 

});

var repoFf = {

 add : function(aCar){
     db.put(aCar.id, aCar);
 },
 remove : function(aCar){
     db.del(aCar.id)
 },
 removeById : function(id){
     db.del(id)
 },
 getAll : function(){
     var keys = db.keys();
     var cars = [];
     keys.forEach(function(elm){cars.push(db.get(elm));});
     return cars;
 },
 get : function(id){
     return db.get(id)
 },
 update : function(aCar){
     dp.put(aCar.id, aCar);
 }

}