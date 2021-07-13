function largestPower(n){
    // return the largest integer k such that 3^k < n
      let a = 0
      let tri = 3
      if(n<=3){
          return 0
      }
      do{
        
        tri*=3
        a++

      }while(tri<n)
      
        return a
    }
    console.log(largestPower(3), 0)
    console.log(largestPower(5), 1)
    console.log(largestPower(7), 1)
    console.log(largestPower(81), 3)
    console.log(largestPower(82), 4)
  