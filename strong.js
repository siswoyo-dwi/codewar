function strong(n) {
let a =`${n}`.split('')
let arr=[]
let total =0
for(let i = 0 ;i<a.length ; i++){
    let factorial =1
for(let k = 1 ;k<=+(a[i]) ; k++){
    
factorial*=k
if(k==(+(a[i]))){arr.push(factorial)
} 
    }if(+(a[i])==0){arr.push(1)}
}
for(let i = 0 ;i<arr.length ; i++){
    total+=arr[i]
}console.log(arr)
console.log(total)
return total===n? "STRONG!!!!":"Not Strong !!"
}
console.log(strong(40585), "STRONG!!!!");
console.log(strong(2), "STRONG!!!!");
console.log(strong(145), "STRONG!!!!");
console.log(strong(7), "Not Strong !!");
console.log(strong(93), "Not Strong !!");
console.log(strong(185), "Not Strong !!");


