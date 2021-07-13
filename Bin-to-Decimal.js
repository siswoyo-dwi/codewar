function binToDec(bin){
    const arr=Array.from(bin)
    for(let i=arr.length;i>0 ; i--){
        
    }
    
  }
  [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )