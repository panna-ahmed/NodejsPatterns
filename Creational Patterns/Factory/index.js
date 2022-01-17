var userFactory = require('./userFactory');

var alex = userFactory('Alex', 100);
var shopper = userFactory('eve', 100, 'employee');

console.log(alex.toString());
console.log(shopper.toString());
