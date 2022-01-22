class InventoryItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  print() {
    console.log(`${this.name} costs ${this.price}`);
  }
}

class GoldenInventoryItem {
  constructor(baseItem) {
    this.name = `Golden ${baseItem.name}`;
    this.price = 1000 + baseItem.price;
  }
}

class DiamondGoldenItem {
  constructor(baseItem) {
    this.name = `Diamond ${baseItem.name}`;
    this.price = 1030 + baseItem.price;
  }
}

module.exports = { InventoryItem, GoldenInventoryItem, DiamondGoldenItem };
