function tidyNumber(n){
    //your code here
    let count=0
    let str=`${n}`.split('')
    if(str.length==1){
        return true
    }else if(str.length>1){
        for(let i =0;i<str.length;i++){
            if(+(str[i])<=+(str[i+1])){
                count+=1
            }
        }
    }return count+1===str.length
  }
  console.log(tidyNumber(12),true);
  console.log(tidyNumber(102),false);
  console.log(tidyNumber(9672),false);
  console.log(tidyNumber(2789),true);
  console.log(tidyNumber(2335),true);
