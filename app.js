// data types & variables

var myName = "Hamish";
var myAge = 21;
let mySurname = "King";
const DB_NAME = "imdb";
console.log(myName + " " + mySurname);

// conditionals

var pinNumber = 1234
if(pinNumber === 1234){
  console.log("Correct PIN");
}else{
  console.log("Incorrect!")
}

// loops

var animals = ['cat', 'donkey', 'goose']
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i])
}

// functions

var printName = function(){
  console.log("Jim");
}
printName();
printName();
printName();
printName();

// arrays

var pubNames = ['Cloisters', '4042', 'George and Dragon'];
console.log(pubNames);

// objects

var person = {
  name: "Jim",
  pinNumber: 1234,
  tel: 9999999
}
console.log(person);
