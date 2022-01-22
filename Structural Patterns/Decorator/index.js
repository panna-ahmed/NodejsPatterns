var Shopper = require('./Shopper');

var {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem,
} = require('./InventoryItem');

var alex = new Shopper('Alex', 4000);

var walkman = new InventoryItem('Walkman', 40);
var necklace = new InventoryItem('Necklace', 10);

var goldNecklace = new GoldenInventoryItem(necklace);
