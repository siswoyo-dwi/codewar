function correctPolishLetters (string) {
    let arr=[]
    for(let i = 0;i<string.length ; i++){
      switch(string[i]){
       case   'ą' : arr.push('a') 
       break;
       case   'ć' : arr.push('c') 
       break;
       case   'ę' : arr.push('e') 
       break;
       case   'ł' : arr.push('l') 
       break;
       case   'ń' : arr.push('n') 
       break;
       case   'ó' : arr.push('o') 
       break;
       case   'ś' : arr.push('s') 
       break;
       case   'ź' : arr.push('z') 
       break;
       case   'ż' : arr.push('z') 
       break;
      default : arr.push(string[i])
      }
    }return arr.join('')
  }
  console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
  console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
  console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");
  
