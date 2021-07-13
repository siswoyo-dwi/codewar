function differenceInAges(ages){
let age = ages.sort((a,b)=>(a-b))
return  [age[0],age[age.length-1],age[age.length-1]-age[0]] 
}
console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
