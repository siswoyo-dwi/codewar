function numberProperty(n){
    let str = ''+n
    let a=0
    if(n>13){
        if(str[str.length-1]==='1'||str[str.length-1]=== '3'||str[str.length-1]=== '7'||str[str.length-1]===  '9'){
            if(Math.sqrt(n)%2===0||Math.sqrt(n)%3===0 ||Math.sqrt(n)%5===0 ||Math.sqrt(n)%7===0||Math.sqrt(n)%11===0||Math.sqrt(n)%13===0 ){
                 a = false
            }else{ a = true} 
        }else{ a = false}
    }
    if(n==1||n== 3||n== 7||n==  9||n==13){
         a = true
    }
    let b = n%2===0
    let c = n%10===0
    return [a,b,c]
    };

console.log(numberProperty(13),[true]);   //-- array
console.log(numberProperty(15),[true]);   //-- array
console.log(numberProperty(71),[true]); //-- array
console.log(numberProperty(19),[false]);   //-- array
console.log(numberProperty(411),[false]);   //-- array
console.log(numberProperty(61),[false]);   //-- array
console.log(numberProperty(81),[false]); //-- array
console.log(numberProperty(101),[false]);   //-- array
