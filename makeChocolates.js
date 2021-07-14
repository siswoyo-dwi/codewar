function makeChocolates(small, big, goal) {
   
    

        for(let i =small  ;i>0 ; i--){
            let total = 0 
            if(total!=goal){continue}
            total +=(i*2)
            
            for(let k = 0 ;k<big ; k++){
                total+=5
                
            }
        }
        
   return small
  }
console.log(makeChocolates(4, 1, 13), 4);
console.log(makeChocolates(4, 1, 14), -1);
console.log(makeChocolates(2, 1, 7), 1);
console.log(makeChocolates(3, 1, 6), 3);
console.log(makeChocolates(8, 0, 7), -1);
console.log(makeChocolates(8, 0, 7), -1);
console.log(makeChocolates(1 ,1 ,8), -1);
console.log(makeChocolates(1 ,1 ,1), -1);
console.log(makeChocolates(2 ,1 ,9), 2);
console.log(makeChocolates(3 ,1 ,6), 3);
