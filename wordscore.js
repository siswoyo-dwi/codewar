function wordscore(word) {
    let a = word.split('')
    let total = 0
    for(let i = 0 ;i<a.length ; i++){
        switch(a[i]){
            case "a" : total+=1 
            break
            case "b" : total+=3 
            break
            case "c" : total+=3 
            break
            case "d" : total+=2 
            break
            case "e" : total+=1 
            break
            case "f" : total+=4 
            break
            case "g" : total+=2 
            break
            case "h" : total+=4 
            break
            case "i" : total+=1 
            break
            case "j" : total+=8 
            break
            case "k" : total+=5 
            break
            case "l" : total+=1 
            break
            case "m" : total+=3 
            break
            case "n" : total+=1 
            break
            case "o" : total+=1 
            break
            case "p" : total+=3 
            break
            case "q" : total+=10 
            break
            case "r" : total+=1 
            break
            case "s" : total+=1 
            break
            case "t" : total+=1 
            break
            case "u" : total+=1 
            break
            case "v" : total+=4 
            break
            case  "w" : total+=4 
            break
            case "x" : total+=8 
            break
            case "y" : total+=4 
            break
            case "z" : total+=10 
            break
       
         }
    }
    return a.length>=7?total*(a.length)+50:total*(a.length)
  }
console.log(wordscore('great'), 30, "The expected score for 'great' was 30. ")
console.log(wordscore('deceive'), 141, "'deceive' is seven letters, the expected result was 141")
console.log(wordscore('melon'), 35, "The expected score for 'melon' was 35.")
