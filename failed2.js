function calculate(str) {
    let arr=[]
    let total = 0
    for(let i = 0 ;i<str.length ; i++){
        let st =''
        for(let k = 0 ;k<1 ; k++){
        if(str.substr(i,5)==='minus')
        arr.push('-')
        if(str.substr(i,4)==='plus')
        arr.push('+')
        if(!isNaN(+str[i]))
        st+=str[i]
    }
}
    for(let i = 0 ;i<arr.length-1 ; i++){
        if(i==0){total+=arr[i]}
        else{
            switch(arr[i]){
                case '+':total+=arr[i+1]
                break
                case '-':total-=arr[i+1]
                break
            }
        }
    }
    return arr;
    }
    console.log(calculate("981plus155plus554"), '10');
    console.log(calculate('1minus2minus3minus4'), '-8');
      console.log(calculate('1plus2plus3minus4'), '2');
  