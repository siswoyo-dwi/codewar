function binToDec(bin){
    let count = 0
  if(bin!=='1'&&bin!=='0'){
    if(bin[0]=='1'){
        count+=1
      }
    for(let i=1;i<bin.length;i++){
      bin[i]=='1'?count=(count*2)+1:count*=2
    }return count
  }else{return +bin}
  }
  [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => console.log( binToDec(inp), exp ) )