var person = ['Andrew', 25];
var person2 = ['Jen', 29];

function greet(name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}

greet(...person);
greet(...person2);


var names = ['Mike', 'Ben'];
var final = [...names, 'Andrew'];

final.forEach((person) => {
  console.log(`Hi ${person}`);
})
