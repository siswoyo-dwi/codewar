function add(...arguments)
{
  if(arguments.length===0){return 0}
   let x = (a,c,i) => a + c/(i+1)
   let a = arguments.reduce(x)
   return a
}
console.log(add(), 0,'No arguments should return 0');
console.log(add(100, 200, 300), 300);
console.log(add(2), 2);
console.log(add(4, -3, -2), 2);
console.log(add(-1, -2, -3, -4) ,-4);
