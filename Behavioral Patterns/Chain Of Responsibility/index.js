// Identification: The pattern is recognizable by behavioral methods of one group of objects that indirectly call
// the same methods in other objects, while all the objects follow the common interface.

var Request = function (amount) {
  this.amount = amount;
};

Request.prototype = {
  get: function (bill) {
    var count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log('Dispense ' + count + ' $' + bill + ' bills');
    return this;
  },
};

var req = new Request(500);
req.get(4).get(30);
