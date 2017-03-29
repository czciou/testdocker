const MyEvent = require('./myevent');

let todos = new MyEvent()

todos.on('hello', (msg) => {
    console.log(`hello..${msg.name}.age:${msg.age}`);
})

// module.exports = todos;
exports.todos = todos;
