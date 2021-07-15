function isRubyComing(list) {
    // thank you for checking out my kata :)
    let count =0
    for(let i = 0 ;i<list.length ; i++){
        if(list[i].language=='Ruby'){
            count+=1
        }
    }return count>0
  }
  var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  
  var list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
  ];
  
  console.log(isRubyComing(list1), true);
  console.log(isRubyComing(list2), false);
   