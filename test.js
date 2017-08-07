/**
 * Created by signiliance on 2017/8/6.
 */


var a = 100;
function F1(){
    var b  = 200;
    function F2(){
        var c = 200;
        consloe.log(a);
        consloe.log(c);
        consloe.log(b);
    }
}

F1();


function isFirstLoad(){
    var _list = [];
    return function(id){
        if(_list.indexOf(id) >= 0){
            return _list;
        }else{
            _list.push(id);
            return _list;
        }
    }
}

var firstLoad  = isFirstLoad();
firstLoad(10); //true
firstLoad(10); //false
firstLoad(20); //true
firstLoad(20); //false


//创建10个a标签，点击标签alert标签ID
var a,i;

for(i = 0;i<10;i++){
    (function(i){a.document.createElement("a");
    a.innerHTML = i+"</br>";
    a.addEventListener('click',function (e) {
        e.preventDefault();
        alert(i)

    })
    document.body.appendChild(a);})(i)
}

//forEach 遍历数组的所有元素

var arr  = [1,2,3];
arr.forEach(function(item,index){
    console.log(index,item);
})

//every 用来判断数组所有元素，都满足一个条件

var arr = [1,2,3];
var result = arr.every(function(item,index){
    if(item<4){
        return true;
    }
})
console.log(result);
//some 用来判断所有的数组元素，只要有一个满足条件就行


var result = arr.some(function(item,index){
    if(item<2){
        return true;
    }
})
console.log(result);

//sort 从小到大排序
var arr = [1,2,4,3,5];

var aa2 = arr.sort(function (a,b) {
    return a-b;//从小到大排序
    return b-a;//从大到小排序
})

// map 将元素重新组装，并返回

var arr = [1,2,4,3,5];
var arr2 = arr.map(function (item,index) {
    return '<b>'+item+'</b>'
})

console.log(arr2);

// filter 通过某条件过滤一个数组

var arr = [1,2,4,3,5];
var arr2 = arr.filter(function(item,index){
    if(item >= 2){
        return true;
    }
})
console.log(arr2);

var obj = {
    x:100,
    y:200,
    z:300
}
var key;
 for (key in obj){
     if(obj.hasOwnProperty(key)){
         console.log(key,obj[key]);
     }
 }

 
 //forEach函数

function forEach(obj,fn){
     var key;
     if(obj instanceof  Array){
         //判断是不是数组
         obj.forEach(function (item,index) {
             fn(index,item);
         })
     }else {
         //不是数组就是对象
         for (key in obj){
             if(obj.hasOwnProperty(key)) {
                 fn(key, obj[key])
             }
         }
     }
}

//forEach 应用

var arr = [1,2,3];
forEach(arr,function (index,item) {
    console.log(index,item);
})
var obj = {x:100,y:200}
forEach(obj,function (key,value) {
    console.log(key,value);
})

//bom操作

var ua = navigator.userAgent;
var isChrome = ua.indexOf('Chrome');
console.log(isChrome);

//screen

console.log(screen.width);
console.log(screen.height);

//location

console.log(location.href);
console.log(location.protocol); //协议
console.log(location.pathname); //路径
console.log(location.search); //?后面的参数
console.log(location.hash); // #后面的就是hash

//history
history.back();  //后退一个网页
history.forward(); //前进一个网页

//通用事件绑定

var div1 = document.getElementById("div1");
div1.addEventListener('click',function (e) {
    var target = e.target;
    if(target.nodeName === 'a'){
        alert(target.innerHTML);
    }
})
//完善

function bindEvent(elem,type,selector,fn) {
    if(fn == null){
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type,function (e) {
        var target;
        if(selector){
            target = e.target;
            if(target.matches(selector)){
                fn.call(target,e);
            }
        }else {
            fn(e);
        }
    })
}

function bindEvent(elem,type,fn) {
    elem.addEventListener(type,fn);
}

e.stopPropagation();//阻止事件冒泡
e.preventDefault();//阻止默认事件


//使用代理

var div1 = document.getElementById('div1');
bindEvent(div1,'click','a',function (e) {
    console.log(this.innerHTML)
})

//使用代理

var a = document.getElementById('a1');
bindEvent(div1,'click',function (e) {
    console.log(a.innerHTML);
})

//Ajax

var xhr = new XMLHttpRequest();
xhr.open('GET',uri,false); //方式 uri 是否异步
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4){ //readyState 0-为初始化，还没有调用send（）方法。1-载入，已经调用send（）方法，正在发送请求。2-载入未完成，send（）方法执行完成，已经接收到全部响应内容。3-交互，正在解析响应内容 4-相应内容解析完成，可以在客户端调用
        if(xhr.status == 200){ //http响应码 ，2xx-表示成功处理请求  3xx。需要重定向，浏览器直接跳转 。 4xx客户端请求错误，如404  5xx 服务器端错误
            alert(xhr.responseText);
        }
    }
}
xhr.send(null);

var xhr = new XMLHttpRequest();

xhr.open('POST',uri,false);

xhr.onreadystatechange = function () {
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            alert(xhr.responseText)
        }
    }
}
xhr.send(null);
