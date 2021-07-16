function pascalsTriangle(n) {
    //return a flat array representing the values of Pascal's Triangle to the n-th level
        let newArr=[]
        let finish =[]
      for(let i = 1 ;i<=n ; i++ ){
          let arr=[]
          for(let k = 0 ;k<i ; k++ ){
              if(i<2){
                  if(k==0){arr.push(1)
                    finish.push(1)
                  }
                  else if(k!=0&&k==i-1){
                      arr.push(1)
                      finish.push(1)
                  }
              }
              else if(i>1){
                  if(k==0){
                      arr.push(1)
                      finish.push(1)
                  }
                  else if(k!=0&&k==i-1){
                      arr.push(1)
                      finish.push(1)
                  }
                  else{
                      arr.push(newArr[i-2][k-1]+newArr[i-2][k])
                      finish.push(newArr[i-2][k-1]+newArr[i-2][k])
                  } 
              }
                 
          }newArr.push(arr)
      }return finish
  }
  console.log(pascalsTriangle(1), [1],"1 level triangle incorrect");
  console.log(pascalsTriangle(2), [1,1,1],"2 level triangle incorrect");
  console.log(pascalsTriangle(4), [1,1,1,1,2,1,1,3,3,1],"4 level triangle incorrect");
  console.log(pascalsTriangle(6), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1],"6 level triangle incorrect");