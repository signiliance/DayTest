/**
 * Created by signiliance on 2017/8/16.
 */
//假如有一个计算要求，需要我们将数组里面的每一项用我们自己想要的字符给连起来。我们应该怎么做？想到使用join方法，就很简单。

var arr = [1,2,3,4,5];

Array.prototype.merge = function(chars){
    return this.jion(chars);
} //实际情况中不建议这么做

var str = arr.merge("-");

console.log(str);


//将每一项加一个数后再连起来。那么这里就需要map来帮助我们对每一项进行特殊的运算处理，生成新的数组然后用字符连接起来了。

var arr = [1,2,3,4,5];

Array.prototype.merge = function(chars,number){
    return this.map(function (item) {
        return item + number;
    }).join(chars);
}

var str = arr.merge("-",2);

console.log(str);


//但是如果我们又想要让数组每一项都减去一个数之后再连起来呢？当然和上面的加法操作一样的实现。

var arr = [1,2,3,4,5];

Array.prototype.merge = function(chars,number){
    return this.map(function (item) {
        return item - number;
    }).join(chars);
}

var str = arr.merge("-",2);

console.log(str);


//封装map函数，将这些不一样的操作单独用一个函数来处理，让这个函数成为map方法的第一个参数，具体这个回调函数中会是什么样的操作，则由我们自己在使用时决定

Array.prototype._map = function(fn,context){
    var temp = [];
    if(typeof fn == 'function'){
        var k = 0;
        var len = this.length;
        for( ; k < len ; k++){
            temp.push(fn.call(context,this[k],k,this));
        }
    }
    else {
        console.log('TypeError: '+ fn +' is not a function.');
    }

    return temp;
}


var newArr = [1,2,3,4]._map(function (item) {
    return item + 1;
});