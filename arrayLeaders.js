var arrayLeaders = numbers => {
    let arr=[]
    let newArr=[]
    let total = 0
    for(let i = numbers.length-1; i>=0;i--){
        if(numbers[i]>total){
            arr.push(numbers[i])
        }
        total+=numbers[i]
    }for(let i = arr.length-1;i>=0 ; i--){
        newArr.push(arr[i])
    }
    return newArr
  }
  console.log(arrayLeaders([1,2,3,4,0]), [4])
  console.log(arrayLeaders([16,17,4,3,5,2]), [17,5,2])
  console.log(arrayLeaders([-1,-29,-26,-2]), [-1])
  console.log(arrayLeaders([-36,-12,-27]),  [-36,-12])
  console.log(arrayLeaders([5,-2,2]), [5,2])
  console.log(arrayLeaders([0,-1,-29,3,2]),  [0,-1,3,2])
