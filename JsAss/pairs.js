//Q5. All pairs that sum to target

function sumPair(arr, target){
    let result = [];

    for(let i=0; i<arr.length; i++){
        for(let j=i + 1 ; j< arr.length; j++){
            if(arr[i] + arr[j]==target){
                result.push([arr[i], arr[j]]);
            }
        }
    
    }
    result.sort((a,b)=> a[0]- b[0]);
    return result;
}

//console.log(sumPair([1,2,2,3,4], 4));
console.log(sumPair([4,5,1,3,6,8], 9));