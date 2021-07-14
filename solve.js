function solve(a, b) {
    let alice = 0
    let made = 0
  for(let i = 0 ;i<a.length ; i++){
    if(a[i]==b[i]){
        
      }else if(a[i]>b[i]){
        alice+=1
      }else if(a[i]<b[i]){
          made+=1
        }
  }if(alice==made){
    return '0, 0: that looks like a "draw"! Rock on!'
  }else if(alice>made){
    return `${alice}, ${made}: Alice made "Kurt" proud!`
  }else if(alice<made){
    return `${alice}, ${made}: Bob made "Jeff" proud!`}
  }
console.log(solve([47, 7, 2], [47, 7, 2]),'0, 0: that looks like a "draw"! Rock on!')
console.log(solve([47, 67, 22], [26, 47, 12]),'3, 0: Alice made "Kurt" proud!')
console.log(solve([25, 50, 22], [34, 49, 50]),'1, 2: Bob made "Jeff" proud!')
