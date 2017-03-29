const express = require('express');
const createDog = require('./event/createDog');
const Dog = require('./event/myeventclass');
const Test = require('./a');

let app = new express();


app.get('/', (req, res, next) => {
    let newdog = createDog('旺财', 2);
    newdog.emit('wang')
    let aa = {name: 'wuwu', age: 22}
    newdog.wang.apply(aa, ['kkk', 333])
    // newdog.wang.call(aa)
    res.json({a:'aaa'});
})


app.listen(7878, () => {
    console.log('http://localhost:7878');
})
