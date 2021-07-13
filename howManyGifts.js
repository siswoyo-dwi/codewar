function howManyGifts(maxBudget, gifts){
    let g = gifts.sort((a,b)=>(a-b))
    let i = 0
    do{maxBudget-=g[i]
        i++
        if(maxBudget<0){
            i-=1
        }
    }while(maxBudget>0)
    if(i>gifts.length){i=gifts.length}
    return i
  }
console.log(howManyGifts(20, [13, 2, 4, 6, 1]), 4);
console.log(howManyGifts(1, [ 0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0 ]),56);