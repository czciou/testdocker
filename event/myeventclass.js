var util = require('util');
var EventEmitter = require('events').EventEmitter;


class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.on('wang', this.wang)
    }
    wang(name, age) {
        this.age = age || this.age;
        this.name = name || this.name;
        console.log(`${this.age} years old dog ${this.name} say wang wang wang `);
    }
}
util.inherits(Dog, EventEmitter);
module.exports = Dog
