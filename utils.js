let utils = {

    isType(type) {//判断数据类型

        return function(content) {

            let t = Object.prototype.Object.call(content).replace(/\[object\s|\]/g, '');

            return t===type;
        }
    },


}

let arr = ['String', 'Number', 'Boolean', 'Null'];

arr.forEach(item => {

    utils[`is${item}`] = utils.isType(item);
})