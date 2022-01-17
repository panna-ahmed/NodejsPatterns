class Person {
  constructor(name = 'unknown') {
    this.name = name;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Person;
