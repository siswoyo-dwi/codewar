function capMe(names) {
    let arr=[]
          
        for(let i = 0 ; i<names.length;i++){
            let y = ''
            for(let k = 0 ; k<names[i].length;k++){
                if(k==0){
                    y+= names[i][k].toUpperCase()
                  }else{
                    y+=names[i][k].toLowerCase()
                }
            }arr.push(y)
        }
      return arr
    }

    console.log(capMe(['jo', 'nelson', 'jurie']))    // returns ['Jo', 'Nelson', 'Jurie']
    console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']))