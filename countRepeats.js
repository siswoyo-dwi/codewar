function countRepeats(str) {
    // code solution
    let count = 0
    for(let i = 0 ;i<str.length-1 ; i++){
        if(str[i]==str[i+1]){
            count+=1
        }
    }return count
}
console.log(countRepeats('AABCCD'),2);
console.log(countRepeats('AABCCDA'),2)
console.log(countRepeats('AaBBCCC'),3);
