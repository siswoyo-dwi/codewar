function reverseWords(str) {
    // Go for it
    let arr=[]
    let newStr=str.split(' ')
    for(let i = 0;i<newStr.length;i++){
            let newArr=[]
            for(let k = newStr[i].length-1;k>=0;k--){
                newArr.push(newStr[i][k])
            
        }arr.push(newArr.join(''))
    }
    return arr.join(' ')

  }
  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
  console.log(reverseWords('apple'), 'elppa');
  console.log(reverseWords('a b c d'), 'a b c d');
  console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
