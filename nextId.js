function nextId(ids){
    let a = ids.sort((a,b)=>(a-b))
    
    for(let i = 0 ;i<a.length ; i++){
        if(a[i]==a[i+1]){
            a.splice(i,1)
            
        }
        if(a[i]!=i){
            return i==0?0:a[i-1]+1 
            }
        }return a[a.length-1]+1
    }
console.log(nextId([ 1, 2, 0, 2, 3 ]), 4);
console.log(nextId([ 1, 2, 0, 2, 3, 5 ]), 4);