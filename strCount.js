function strCount(str, letter){  
    let count = 0
    for(let i=0;i<str.length;i++){
        str[i]==letter?count+=1:count+=0
    }return count
  }
  console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);
 