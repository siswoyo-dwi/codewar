function drawStairs(n) {
  let a =''
    for(let i = 0 ;i<n-1 ; i++){
        a+='I\n'
        for(let l = 0 ;l<i+1 ; l++){
            a+=' '
        }
    }return a+'I'
}

console.log(drawStairs(1), "I", "The first step has no padding on the left, just an 'I'");
console.log(drawStairs(3), "I\n I\n  I", "There's something wrong with these 3 steps");
console.log(drawStairs(5), "I\n I\n  I\n   I\n    I", "5-step stairs no good");
