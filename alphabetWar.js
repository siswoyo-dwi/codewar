function alphabetWar(fight){
    let left =0
    let right =0
    let arr =fight.split('')
    for(let i = 0 ;i<arr.length ; i++){
        switch(arr[i]){
            case 'w':left+=4 
            break
            case 'p':left+=3 
            break
            case 'b':left+=2 
            break
            case 's':left+=1 
            break
            case 'm':right+=4 
            break
            case 'q':right+=3 
            break
            case 'd':right+=2 
            break
            case 'z':right+=1 
            break
        }
    }if(left==right){return "Let's fight again!"}
     return left>right?"Left side wins!":"Right side wins!"
  }
  console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("zdqmwpbs") , "Let's fight again!" );
console.log( alphabetWar("zzzzs"), "Right side wins!" );
console.log( alphabetWar("wwwwww"), "Left side wins!" );
