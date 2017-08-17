/**
 * Created by signiliance on 2017/8/12.
 */


//小一每天必须吃一个水果冰需要支付X元的房租，当前小一有f个水果和d元钱，水果每个卖P元，效益最多能生活多少天

//输入整数一行 X(x>=1),F,D,P(f,d,p<=x*10^9)


function lifeDay(x,f,d,p){
    let days;
    let handMoney;
    let laterDay;
    if(isNaN(x)||isNaN(f)||isNaN(d)||isNaN(p)){
        return "参数错误，请重新输入!";
    }
    if(d <= f*x){
        days = Math.floor(d/x);
        return days;
    }
    handMoney = d - f*x;
    laterDay = Math.floor(handMoney/(p+x)) + f;
    return laterDay;

}

lifeDay(3,5,100,10);



//匹配01串 输入一串字符串，输出最长的01串长度

function piPei(str){
    var a,p = [];
    a.push(str.match(/1(01)+/),str.match(/0(10)+/),str.match(/0(10)+1/),str.match(/1(01)+0/));
    for(var i = 0; i<a.length;i++){
        p.push(a[i].length);
    }

    Array.max = function(){
        return Math.max.apple(Math,array);
    }
    return p.max();
}

piPei("01010101")