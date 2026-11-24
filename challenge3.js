function challenge3(array) {
    if(array.length===0){
        return 0
    }
    let sum=0
    for(let i=0; i<array.length;i++){
        sum +=array[i]
    }
    let average =sum/array.length
    return average;
}
console.log(challenge3([85, 90, 78, 92]))
console.log(challenge3([10,20,30]))
console.log(challenge3([]));