const sequenceSum = (begin, end, step) => {
  let arr=[begin]
  let a = begin
  let total = 0
do{a+=step
  arr.push(a)
}while(end>a)
for(let i = 0 ;i<arr.length ; i++){
  if(arr[i]<=end){total+=arr[i]}
}return total
  };
  console.log(sequenceSum(2 ,24 ,22),  26)
  console.log(sequenceSum(263, 857, 23), 1111)
  console.log(sequenceSum(1, 5, 3), 5)  
