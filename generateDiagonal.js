function abc(baris) {
    let newArr=[]
    for(let i = 1 ;i<=baris ; i++ ){
        let arr=[]
        for(let k = 0 ;k<i ; k++ ){
            if(i<2){
                if(k==0){arr.push(1)
                }
                else if(k!=0&&k==i-1){
                    arr.push(1)
                }
            }
            else if(i>1){
                if(k==0){
                    arr.push(1)
                }
                else if(k!=0&&k==i-1){
                    arr.push(1)
                }
                else{
                    arr.push(newArr[i-2][k-1]+newArr[i-2][k])
                } 
            }
               
        }newArr.push(arr)
    }return newArr
  }
function generateDiagonal(n, l){
let x = abc(n+l)
let arr=[]
  for(let i = 0 ; i <l; i++){
    arr.push(x[n+i][n])
    }return arr
  }

  console.log(generateDiagonal(4, 10),[ 1, 5, 15, 35, 70, 126, 210, 330, 495, 715 ])
