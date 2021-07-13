function  kprimesStep(k, step, start, nd) {
    const prime = (n)=>{
        if(n<2||!(n%2)){return  false}
        for(let i = 3 ;i<=Math.sqrt(n) ; i++){
          if(n%i===0){return false}
        }return true
      }
      let arr=[]
    for(let i = start ;i<=nd ; i++){
        if(Math.pow(i,1/step)===0){
            arr.push(i)
        }
    }
    return arr
}
console.log(kprimesStep(2, 2, 0, 50), [[4, 6], [33, 35]]);
console.log(kprimesStep(5, 20, 0, 50),([]));
