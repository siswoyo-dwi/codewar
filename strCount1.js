function strCount(obj){
    let count = 0;
    for (const i in obj) {
        
      if (typeof obj[i] == 'string'){
        count+=1;
      }
      else {
        count += strCount(obj[i])
      }
    }
    return count;
  }

console.log(strCount({ one: '1',
two: 2,
three: false,
four: {},
another: '3',
andit: [],
andyou: [],
whatabout: { andone: 'and another', andtwo: 2, andthree: 'and again' },
lastkey: [ [ [Array], false ], 0 ] }));
      
      