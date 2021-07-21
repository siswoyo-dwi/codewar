function sabb(s, val, happiness){
    s.toLowerCase()
  let arr = ['s','a','b','t','i','c','l']
  let count=0
  for(let i = 0 ;i<s.length ; i++){
    for(let k = 0 ;k<arr.length ; k++){
    if(arr[k]==s[i])
      count+=1
  }
  }return val+happiness+count>22?'Sabbatical! Boom!':'Back to your desk, boy.'
  }
console.log(sabb('scrst' ,10 ,8), 'Back to your desk, boy.');
console.log(sabb('Why are you shouting?', 7, 2), 'Back to your desk, boy.'); 
console.log(sabb('What do you mean I cant learn to code??', 8, 9), 'Sabbatical! Boom!'); 
console.log(sabb('Please calm down', 9, 1), 'Back to your desk, boy.'); 
