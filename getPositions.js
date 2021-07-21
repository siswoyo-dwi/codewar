const getPositions = s => {
    let x = s%27
   let a=Math.floor(x/9)
   let b=Math.floor((x-(a*9))/3)
   let c=x%3
   return [c,b,a]
  }
  console.log(getPositions(1826817166),[ 1, 0, 0 ]);
  console.log(getPositions(1340254),[ 1, 0, 0 ]); 
  console.log(getPositions(3), [0, 1, 0]);
