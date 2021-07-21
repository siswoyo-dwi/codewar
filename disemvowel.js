function disemvowel(str) {
    let y=''
for(let i = 0 ;i<str.length ; i++){
    switch(str[i]){
        case 'a': y+=''
        break
        case 'i': y+=''
        break
        case 'u': y+=''
        break
        case 'e': y+=''
        break
        case 'o': y+=''
        break
        case 'A': y+=''
        break
        case 'I': y+=''
        break
        case 'O': y+=''
        break
        case 'U': y+=''
        break
        case 'E': y+=''
        break
        default : y+=str[i]
    }
}
    return y;
  }
  console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
  console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
