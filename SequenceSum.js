var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
        let a = 0
        let b ='0'
        if(count==0){return '0=0'}
        if(count<0){return `${count}<0`}
      for(let i = 1 ;i<=count ; i++){
            a+=i
            b+=`+${i}`
      }return `${b} = ${a}`
    };
  
    return SequenceSum;
  
  })();
  console.log(SequenceSum.showSequence(6),"0+1+2+3+4+5+6 = 21")
 