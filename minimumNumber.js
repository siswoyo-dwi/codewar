
function minimumNumber(numbers){
    let alp=0
    let arr=[]
    let newArr=[]
    for(let i = 0 ;i<numbers.length ; i++){
      alp+=numbers[i]
    }
    for(let i = 0 ;i<50 ; i++){
        arr.push(alp+i)
    }
    for(let i = 0 ;i<arr.length ; i++){
        let count=0
        for(let k = 1 ;k<=arr[i] ; k++){
            if(arr[i]%k==0){
                count+=1
            }
            }if(count==2){
                newArr.push(arr[i])
        }
    }
    return newArr[0]-arr[0]
  }

  console.log(minimumNumber( [856, 56, 9, 22, 178, 7, 641, 42, 8, 3, 9, 7, 5, 4, 363, 469, 8, 7, 6, 5, 2, 4, 97, 99, 9, 644, 541, 10, 60, 37, 91, 9, 5, 581, 885, 967, 2, 3, 5, 1, 921, 73, 565, 285, 20, 75, 58, 5, 99, 23, 76, 5, 900, 3, 36, 12, 47, 6, 6, 81, 41, 48, 1, 10, 51, 33, 10, 87, 8, 44, 1, 7, 369, 67, 336, 308, 470, 349, 439, 12, 9, 8, 8, 373, 251, 8, 725, 84, 969, 34, 27, 3, 4, 863, 2, 9, 10, 6, 7, 6, 1, 96, 933, 867, 57, 2, 3, 4, 88, 59, 10, 128, 812, 6, 49, 14, 303, 601, 39, 99, 9, 584, 3, 8, 3, 9, 4, 910, 9, 87, 8, 7, 7, 969, 74, 583, 91, 6, 2, 671, 936, 60, 76, 657, 8, 4, 34, 787, 125, 170, 99, 60, 5, 75, 3, 7, 54, 10, 8, 2, 9, 706, 67]),22);
  console.log(minimumNumber( [3, 8, 537, 474, 64, 9, 5, 68, 3, 63, 887, 8, 709, 75, 18, 4, 6, 26, 26, 4, 223, 166, 48, 14, 812, 9, 4, 7, 1, 25, 100, 709, 6, 9, 985, 45, 1, 10, 7, 40, 63, 430, 700, 7, 13, 90, 10, 405, 98, 318, 5, 32, 3, 9, 88, 48, 25, 72, 35, 49, 10, 1, 9, 687, 117, 4, 28, 1, 10, 507, 7, 81, 2, 78, 10, 33, 59, 68, 26, 145, 26, 600, 8, 7, 20, 7, 611, 694, 705, 9, 90, 52, 504, 336, 3, 897, 2, 78, 60, 1, 192, 10, 6, 74, 6, 268, 8, 2, 2, 6, 4, 19, 379, 597, 560, 47, 9, 392, 69, 6, 345, 197, 432, 60, 44, 5, 9, 98, 1, 3, 5, 68, 477, 10, 4, 985, 30, 822, 3, 13, 100, 316, 4, 1, 407, 3, 2, 6, 625, 81, 528, 28, 62, 507, 3, 9, 74, 57, 5, 79, 4, 9]),11);