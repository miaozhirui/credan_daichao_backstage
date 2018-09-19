let pathToRegExp = require('path-to-regexp');

let keys = [];
//end = false 不必须结束
//end = true 必须结束
let reg1 = pathToRegExp('/user/:id/:name',keys, {end:true});

// console.log(reg1)
// console.log(keys)
// console.log(reg1.test('/user'));
// console.log(reg1.test('/user/1'))
// console.log('/user/12'.match(reg1))

let names = keys.map(key=>key.name)
let result = '/user/12/mzr'.match(reg1);
console.log(result)

let params = names.reduce((memo, name, idx) => {

    memo[name] = result[idx+1];

    return memo
}, {})

console.log(params)