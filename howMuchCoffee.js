function howMuchCoffee(events) {
    let count = 0
    if(events[0]==undefined){return 0}
    else{
        for(let i = 0 ;i<events.length ; i++){
            if(events[i]=='cw'||events[i]=='CW'||events[i]=='cat'||events[i]=='CAT'||events[i]=='dog'||events[i]=='DOG'||events[i]=='movie'||events[i]=='MOVIE'){
                events[i].toLowerCase()==events[i]?count+=1:count+=2
            }   
        }
    }
    return count<=3?count:'You need extra sleep'
  }

  console.log(howMuchCoffee([]), 0)
  console.log(howMuchCoffee(['cw']), 1)
  console.log(howMuchCoffee(['CW']), 2)
  console.log(howMuchCoffee(['cw','CAT']), 3)
  console.log(howMuchCoffee(['cw','CAT','DOG']), 'You need extra sleep')
  console.log(howMuchCoffee(['cw','CAT', 'cw=others']), 3)
