function isPalindrome(line) {
    let lines = `${line}`
    console.log(lines.length)
    if(lines.length<=1){return true}
    else if(lines.length%2==0){
        let count=0
        for(let i = 0; i<lines.length/2;i++ ){
            lines[i]==lines[lines.length-i-1]?count+=1:count+=0
        }return count==lines.length/2?true:false
    }
    else if(lines.length%2==1){
        let count=0
        for(let i = 0; i<(lines.length/2)-0.5;i++ ){
            lines[i]==lines[lines.length-i-1]?count+=1:count+=0
        }return count==(lines.length/2)-0.5?true:false
    }
  }
  console.log(isPalindrome("anna"), true);
    console.log(isPalindrome("walter"), false);
    console.log(isPalindrome(12321), true);
    console.log(isPalindrome(123456), false);
    console.log(isPalindrome("."), true);
    console.log(isPalindrome(".!!."), true);