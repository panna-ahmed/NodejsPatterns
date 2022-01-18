var { writeFile, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {
  filename = 'localStorage.json';
  constructor() {
    if (existsSync(this.filename)) {
      console.log('Loading');
      var txt = readFileSync(this.filename);
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFile(this.filename, JSON.stringify(this.items), (error) => {
      if (error) console.error(error);
    });
  }

  clear() {
    this.items = {};
    unlink(this.filename, () => {
      console.log('Localstorage removed');
    });
  }
}

module.exports = new LocalStorage();
