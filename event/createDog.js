const myclass = require('./myeventclass');



function createDog(name, age) {

    let dog = new myclass(name, age)
    return dog;
}



module.exports = createDog;
