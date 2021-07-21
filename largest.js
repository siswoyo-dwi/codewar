function largest(n,xs){
    // Find the n highest elements in a list
    xs.sort((a,b)=>(a-b))
    let arr =[]
    for(let i = 1 ;i<=n ; i++){
        arr.push(xs[xs.length-i])
    }
return arr.sort((a,b)=>(a-b))
}
console.log(largest(2,[10,9,8,7,6,5,4,3,2,1]),[9,10])
console.log(largest(3,[5,1,5,2,3,1,2,3,5]),[5,5,5])
console.log(largest(7,[9,1,50,22,3,13,2,63,5]),[3, 5, 9, 13, 22, 50, 63])
console.log(largest(0,[1,2,3,4,8,7,6,5]),[])


