function replace(s){
    let arr=[]
    for(let i=0;i<s.length;i++){
    if(s[i]!='i'&&s[i]!='I'&&s[i]!='a'&&s[i]!='A'&&s[i]!='u'&&s[i]!='U'&&s[i]!='e'&&s[i]!='E'&&s[i]!='o'&&s[i]!='O'){arr.push(s[i])}
    if(s[i]=='i'||s[i]=='I'){arr.push('!')}
    if(s[i]=='a'||s[i]=='A'){arr.push('!')}
    if(s[i]=='u'||s[i]=='U'){arr.push('!')}
    if(s[i]=='e'||s[i]=='E'){arr.push('!')}
    if(s[i]=='o'||s[i]=='O'){arr.push('!')} 
    }
    return arr.join('')
  }
  console.log(replace("Hi!") , "H!!")
console.log(replace("!Hi! Hi!") , "!H!! H!!")
console.log(replace("aeiou") , "!!!!!")
console.log(replace("ABCDE") , "!BCD!")