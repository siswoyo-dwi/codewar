function validateHello(greetings) {
    let greet = greetings.split(' ')
    let greetYou=[]
    let greetMe=[]
    let arr = ['hello','ciao','salut','hallo','hola','ahoj','czesc']
    let wrongArr=[',','.',';','?','\'','!']
    let res = 0
    for(let k= 0 ;k<greet.length ; k++){
        greetYou.push(greet[k].toLowerCase())
    }
    for(let l= greetYou.length ;l>0 ; l--){
     let a= greetYou[l].split('')

    }

    return 
  }
console.log(validateHello('SALuT, HoLa, hAsTA qUE HOW How. yOU! YOU HoW hoMBRe qUE. yOU? aRE: HOw? WiE TRES: hAllo! how hAsTa wIe, lA bIeN WIe;'), true);
console.log(validateHello('ViStA? cZesc; hOLA Bien; how; pasA! VisTa; WIE VisTA, VISTa; ViStA ARE yoU, CzESC. Are dOInG quE, HASTA tScHUss TSchUSs trES; TReS? How paSA! bIen WiE WiE YOu TreS'), true);
console.log(validateHello('HOmBrE PASa trES. ArE CzESC, HOw; pASA WIE'), true);
console.log(validateHello('YoU, aHOj. TScHUSS: how LA. que WIe,'), true);