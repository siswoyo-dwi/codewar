function doubleton(num){
 let a = ''
 if(num>9){
    for(let i=1;i<num;i++){
        a=`${num+i}`
       if(([...new Set(a.split(''))]).length==2){break}
    }
 }else{
    for(let i=1;i<num+10;i++){
        a=`${num+i}`
       if(([...new Set(a.split(''))]).length==2){break}
    }
 }

 return +a
} 
console.log(doubleton(120), 121, "Wrong result. It should be 121" );
console.log(doubleton(1234), 1311, "Wrong result. It should be 1311" );
console.log(doubleton(1), 10, "Wrong result. It should be 10" );
console.log(doubleton(10), 12, "Wrong result. It should be 12" );