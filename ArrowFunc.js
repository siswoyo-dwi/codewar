var ArrowFunc = function(arr) {
    let newArr = []
    for(let i = 0 ;i<arr.length ; i++){
        let a = String.fromCharCode(arr[i])
        newArr.push(a)
    }
    return  newArr.join('')
  }

console.log(ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters')
console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!')
