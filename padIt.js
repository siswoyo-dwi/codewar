function padIt(str,n){
    do{if((n+2)%2===1){
        str='*'+str
      }if((n+2)%2===0){
        str=str+'*'
      }
      n--
    }while(n+2>2)
      return str
  }
  console.log(padIt("a",1),"*a");
  console.log(padIt("a",2),"*a*");
  console.log(padIt("a",3),"**a*");
  console.log(padIt("a",4),"**a**");
  console.log(padIt("a",5),"***a**");