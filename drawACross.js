function drawACross(n) {
    //Your code here!!!
    let str=''
    if(n<3){return 'Not possible to draw cross for grids less than 3x3!'}
    else if(n%2==0){return 'Centered cross not possible!'}
    else{
        for(let i = 0 ;i<n ; i++){
          for(let k = 0 ;k<n; k++){
            if(k==i||k+i==n-1){
              str+='x'
            }else{
              str+=' '
            }
            
          }if(i<n-1){str+='\n'}
        }
    }return str
  }
console.log(drawACross(7), 'Should draw a centered cross in a grid of height and width n!')
console.log(drawACross(6), 'Centered cross not possible!', 'If a centred cross is not possible, display the correct error message!')
console.log(drawACross(10), 'Centered cross not possible!', 'If a centred cross is not possible, display the correct error message!')
console.log(drawACross(2), 'Not possible to draw cross for grids less than 3x3!', 'Numbers less than three should return the correct error message')
