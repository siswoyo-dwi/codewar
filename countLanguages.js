function countLanguages(list) {
    // thank you for checking out the Coding Meetup kata :)
    let obj ={}
    for(let i = 0 ;i<list.length ; i++){
        let count = 0
    for(let k = 0 ;k<list.length ; k++){
        if(list[i].language==list[k].language){
            count+=1
            }obj[list[i].language]=count
        }
    }
        return obj
  }
  var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];
  
  var answer = { C: 2, JavaScript: 1, Ruby: 1 };
  
  console.log(countLanguages(list1), answer);
  