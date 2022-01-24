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
