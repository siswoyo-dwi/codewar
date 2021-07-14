function apparently(string) {
    let a = string.split(' ')
    let newStr=[]
    for(let i = 0 ;i<a.length ;i++ ){
        if((((a[i]=='and')||(a[i] =='but'))&&a[i+1]!='apparently')){
            newStr.push(a[i]+' apparently')
        }else{newStr.push(a[i])
        }
    }

    return newStr.join(' ')
  }
console.log(apparently('It was great and I have never been on live television before but sometimes I dont watch this.'), 'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.');
console.log(apparently('and apparently'), 'and apparently');
console.log(apparently('apparently'), 'apparently');