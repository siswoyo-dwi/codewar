function removeEveryOther(arr){
    console.log(arr.length)
    let array=[]

        for(let i = 0 ;i<Math.ceil(arr.length/2);i++){
            array.push(arr[i+i])
        }return array
    
  }
  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
  console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
  console.log(removeEveryOther(["5","v","v","o","k","4","u","2","u","h","3","l","d","u","3","d","g","5","2","o","3","m","w","h","4","b","q","y","u"]),[[ '5', 'v', 'k', 'u', 'u', '3', 'd', '3', 'g', '2', '3', 'w', '4', 'q', 'u' ]]);
