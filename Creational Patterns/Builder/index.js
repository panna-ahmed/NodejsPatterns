var PersonBuilder = require('./PersonBuilder');

var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();

console.log(sue.toString());
