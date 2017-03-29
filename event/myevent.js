var util = require('util');
var EventEmitter = require('events').EventEmitter;



function MyEvent() {
  EventEmitter.call(this);
}

util.inherits(MyEvent, EventEmitter);

module.exports = MyEvent;
