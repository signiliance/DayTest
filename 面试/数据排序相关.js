/**
 * Created by signiliance on 2017/9/3.
 */
function merge(...arrs){
    var arr1 = [];
    for(let i = 0;i< arguments.length;i++){
        arr1 = [].concat.call(arguments,...arrs);
    }
    return arr1.quickSort();
}

function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var left,right = [];
    var middleIndex = Math.floor(arr.length/2);
    var middle = arr.splice(middleIndex,1);
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<middle){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [].concat(quickSort(left),middle,quickSort(right));

}