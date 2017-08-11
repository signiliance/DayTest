/**
 * Created by signiliance on 2017/8/11.
 */

function flat(arr,result){
    let lenngth = arr.length , d;
    for(let i = 0;i<arr.length;i++){
        d = arr [i];
        if(typeof d === 'number'){
            result.push(d);
        }else{
            flat(d,result);
        }
    }
}

const arr = [1, [2, [[3, 4], 5], 6]];
const result = [];
flat(arr,result);
console.log(result);