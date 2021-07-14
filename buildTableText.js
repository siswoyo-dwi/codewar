function buildTableText(row, column, character) {
let table =''
  for(let i= 3 ;i<12 ; i++){
  let line = ''
  for(let k= 3 ;k<12 ; k++){
    if(i%2==1){line+='-'}
    else if(i%2==0){
      if(k%2==1){line+='|'}
      else if(k%2==0){line+=' '}
    }
  }line+='\n'
  table+=line
}let alpha = table.split('')
let newColumn =((column+1)*2)
let newRow=((row+1)*20)-10
let setChar = newColumn+newRow
let newArr=[]
for(let i= 0 ; i<table.length;i++){
  if(i+1==setChar){newArr.push(character)}else{
    newArr.push(table[i])
  }
}

return newArr.join('')
}
console.log(buildTableText(2, 3, "B"), 
"---------\n" + 
"| | | | |\n" + 
"---------\n" + 
"| | | | |\n" + 
"---------\n" + 
"| | | |B|\n" + 
"---------\n" + 
"| | | | |\n" + 
"---------\n"
);