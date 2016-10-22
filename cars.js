var cars = [
  {
    id: "1",
    brand: "Mercedes",
    type: "stick",
    rate: 30,
    location: {
      x:44.232323,
      y:56.223232      
      }
  },
  {
    id: "2",
    brand: "Opel",
    type: "automate",
    rate: 25,
    location: {
      x:44.232323,
      y:56.223232      
      }
  }
]

var newCar = {
    
    id: 3,
    brand: 'bmw',
    type: "stick",
    rate: 20,
    location: {
     x:44.232323,
     y:56.223232
}

}

cars.push(newCar);


module.exports = cars;

// console.log(cars)