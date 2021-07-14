function numberProperty(n){
    let count=0
    for(let i = 1 ;i<=n;i++){
        if(n%i===0){
            count+=1
        }
    }
    let a = count===2
    let b = n%2===0
    let c = n%10===0
    return [a,b,c]
    };
    console.log(numberProperty(-10),[false,true,true]);   //-- array
console.log(numberProperty(2),[true,true,false]);   //-- array
console.log(numberProperty(120),[false,true,true]); //-- array
console.log(numberProperty(125),[false,false,false]);   //-- array
