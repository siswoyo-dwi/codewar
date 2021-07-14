function mutateMyStrings(stringOne, stringTwo){
    let strOne =stringOne.split('')
    let strTwo =stringTwo.split('')
    let str =''
        for(let i = 0 ;i<strOne.length ; i++){
                let a = []
                
            for(let k = 0 ;k<strOne.length ; k++){  
                if(strOne[k]!=strTwo[k]){
                    a.push(strTwo[k])
                }else{a.push(strOne[k])}
                }
                let b = a.join('')
                str+=b+'\n'
            }
            
  return str
  }
  console.log( mutateMyStrings('acvqw' , 'lvqew') );
