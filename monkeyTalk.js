function monkeyTalk(phrase){
    let str1=phrase.toLowerCase()
    let arr=str1.split(' ')
    let str= ''
    for(let i = 0 ;i<arr.length ; i++){
      if(i==0){
      arr[i][0]=='o'||arr[i][0]=='e'||arr[i][0]=='a'||arr[i][0]=='i'||arr[i][0]=='u'?str += 'Eek':str += 'Ook'
      }
      if(i>0){
        arr[i][0]=='o'||arr[i][0]=='e'||arr[i][0]=='a'||arr[i][0]=='i'||arr[i][0]=='u'?str += ' eek':str += ' ook'
      }
      
    }return str+'.'
  }
console.log(monkeyTalk('Hello'), 'Ook.');
console.log(monkeyTalk('Everyone'), 'Eek.');
console.log(monkeyTalk('Hello Everyone'), 'Ook eek.');
console.log(monkeyTalk('Everyone Hello'), 'Eek ook.')
