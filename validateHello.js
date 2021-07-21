function validateHello(greetings) {
    let greet = greetings.toLowerCase()
    let arr = ['hello','ciao','salut','hallo','hola','ahoj','czesc']
    let res = 0
    for(let i= 0 ;i<greet.length ; i++){
        let a = greet[i]+greet[i+1]+greet[i+2]+greet[i+3]+greet[i+4]
        let b = greet[i]+greet[i+1]+greet[i+2]+greet[i+3]
    if(a==arr[0]||a==arr[2]||a==arr[3]||a==arr[6]){
        res+=1
    }else if(b==arr[1]||b==arr[4]||b==arr[5]){
        res+=1
        }
    }
    return res>0?true:false
  }
console.log(validateHello('"tSchUsS! tSChusS; WIE; hombre PasA cZESc haSTa! You! lA? pasA."'), true);
console.log(validateHello('meh'), false);
