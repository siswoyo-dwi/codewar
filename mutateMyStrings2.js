function mutateMyStrings(stringOne, stringTwo){
    String.prototype.replaceAt = function(i, r) {
        let chars = this.split('');
        chars[i] = r;
        return chars.join('');
    }
    let str=[`${stringOne}`]

    let count = 0 
    for(let i = 0 ;i<stringOne.length ; i++){
    if(stringOne[i]!==stringTwo[i]){
        count+=1}
    }
    for(let k = 0 ;k<count ; k++){
        for(let i = 0 ;i<stringOne.length ; i++){
            if(str[k][i]!==stringTwo[i]){
                str.push(str[k].replaceAt(i,stringTwo[i]))
                break
                }
            }
    }
    return str.join('\n')+'\n'
  }
  console.log( mutateMyStrings('bubble gum', 'turtle ham'));
