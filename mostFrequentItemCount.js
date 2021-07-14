function mostFrequentItemCount(collection) {
    // Do your magic. :)
    if(collection[0]==undefined){return 0}
    let newSet = new Set()
    for(let i = 0 ; i<collection.length;i++){
        newSet.add(collection[i])
    }let a= [...newSet]
    let arr=[]
    
    for(let k = 0 ;k<a.length ; k++){
        let count=0
        for(let i = 0 ;i<collection.length ; i++){
            if(a[k]==collection[i]){
                count+=1
            }
        }arr.push(count)
    }arr.sort((a,b)=>(b-a))
        return arr[0]
  }
console.log(mostFrequentItemCount([]), 2);
console.log(mostFrequentItemCount([-15,-12,-5,-5,8,-4,-4,-4,0,-3,8,9,2,13,6,9,-11,0,-6,-12,2,-9,-10,14,-14,-2,-7,-10,11]),'expected 20 to equal 3')
 