function balancedNum(number)
{    console.log(number)
    let _1st=0
    let _2nd=0
    let a =`${number}`
    if(a.length<3){return 'Balanced'}
    else if(a.length%2==1){
      for(let i=0;i<(a.length/2)+0.5;i++){
        
        _1st+=(+a[i])
      }
      for(let i=a.length-1;i>= (  a.length/2         ) -0.5    ;i--){

        _2nd+=(+a[i])
      }
    }
          else if(a.length%2==0 ){
      for(let i=0;i<(a.length/2);i++){
        
        _1st+=(+a[i])
      }
      for(let i=a.length-1;i>= (a.length/2)  ;i--){

        _2nd+=(+a[i])
      }
    }
    
    return _1st===_2nd?'Balanced':'Not Balanced'
}