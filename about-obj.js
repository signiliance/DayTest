/**
 * Created by signiliance on 2017/8/16.
 */

//访问对象多参数

['name', 'age'].forEach(function(item) { //name 与 age 是对象属性名
    console.log(person[item]);
})

//构造函数首字母大写
//new关键字让构造函数具有了与普通函数不同的许多特点，而new的过程中，执行了如下过程：
//声明一个中间对象；
//将该中间对象的原型指向构造函数的原型；
//将构造函数的this，指向该中间对象；
//返回该中间对象，即返回实例对象。

/*

new关键字的构造过程：
例如 var Person = function(){};
     var p = new Person();

     new的执行顺序
var p = {}; 定义一个p对象
p.__proto__ = Person.prototype;  实例的原型指向构造函数的原型
Person.call(p);  构造p


 new关键字让构造函数具有了与普通函数不同的许多特点，而new的过程中，执行了如下过程：


 声明一个中间对象；
 将该中间对象的原型指向构造函数的原型；
 将构造函数的this，指向该中间对象；
 返回该中间对象，即返回实例对象。
*/

//console.log(p1 instanceof Person)   判断实例与构造函数的关系

//当我们访问实例对象中的属性或者方法时，会优先访问实例对象自身的属性和方法。

//我们还可以通过in来判断，一个对象是否拥有某一个属性/方法，无论是该属性/方法存在与实例对象还是原型对象。

//console.log('name' in p1); // true

/*

in的这种特性最常用的场景之一，就是判断当前页面是否在移动端打开。

isMobile = 'ontouchstart' in document;
 很多人喜欢用浏览器UA的方式来判断，但并不是很好的方式

*/


/*


function Person() {}

Person.prototype = {
    constructor: Person,
    getName: function() {},
    getAge: function() {},
    sayHello: function() {}
}

Person.prototype = {}实际上是重新创建了一个{}对象并赋值给Person.prototype，这里的{}并不是最初的那个原型对象。因此它里面并不包含constructor属性。为了保证正确性，我们必须在新创建的{}对象中显示的设置constructor的指向。即上面的constructor: Person


*/
