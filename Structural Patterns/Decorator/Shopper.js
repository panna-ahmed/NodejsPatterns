class Shopper {
  constructor(name, account = 0) {
    this.name = name;
    this.account = account;
    this.items = [];
  }

  purchase(item) {
    if (item.price > this.account) {
      console.log(`Cannot afford ${item.name}`);
    } else {
      this.account -= item.price;
      this.items.push(item);
    }
  }

  printStatus() {
    this.items.forEach((item) => {
      console.log(`${item.name} - ${item.price}`);
    });
  }
}

module.exports = Shopper;
