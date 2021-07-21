function well(x){
    let arr=[]
    let z = x.join('').toLowerCase()
    for(let i = 0 ;i<z.length ; i++){
        let count = 0
        let str=z[i]+z[i+1]+z[i+2]+z[i+3]
                if(str=='good'){
                    count+=1  
        }arr.push(count)
    }
    const y = (a,b)=>(a+b)
    const final =  arr.reduce(y)
    return final>2?'I smell a series!':final>0?'Publish!':'Fail!'
}
console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD!', 'bad', 'bad', 'bAd']]), 'Publish!');
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');
