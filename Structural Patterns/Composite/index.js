//Compose objects into tree structures to represent part whole hierarchies.
//Composite lets clients treat individual objects and compositions of objects uniformly.

var CatalogGroup = require('./CatalogGroup');
var CatalogItem = require('./CatalogItem');

var boots = new CatalogItem('Leather Boots', 89.99);
var sneakers = new CatalogItem('Nike', 9.99);
var flipflops = new CatalogItem('Casual', 35.9);

var group_shoes = new CatalogGroup('Shoes', [boots, sneakers, flipflops]);

var group_food = new CatalogGroup('Foods', [
  new CatalogItem('Milk', 78),
  new CatalogItem('Fries', 8),
]);
var keychain = new CatalogItem('key chain', 0.99);
var catalog = new CatalogGroup('All', [keychain, group_food, group_shoes]);

catalog.print();
