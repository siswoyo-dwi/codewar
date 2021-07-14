function checkExam(array1, array2) {
    let count =0
   for(let i = 0 ;i<array1.length ; i++){
       if(array2[i]!=""){
        array1[i]==array2[i]?count+=4:count-=1
       }else{
        count+=0
       }
       
   }return count>0?count:0
  }
  console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
  console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
  console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
  console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  
