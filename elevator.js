function elevator(left, right, call){
  let a = call-left
  let b = call-right
  if(a<0){a=a-(a*2)}
  if(b<0){b=b-(b*2)}
  return a>b?'left':'right'
}
console.log(elevator(1,0,0), 'right');
console.log(elevator(0,2,0), 'right');
console.log(elevator(0,1,2), 'right');
console.log(elevator(0,0,0), 'right');
console.log(elevator(0,2,1), 'right');
