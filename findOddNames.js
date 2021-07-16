function findOddNames(list) {
    // thank you for checking out the Coding Meetup kata :)
    let arr=[]
    let name=[]
    for(let i = 0 ;i<list.length ; i++){
        name.push(list[i].firstName)
    }for(let i=0;i<name.length ; i++){
        let count= 0
        for(let k = 0 ;k<name[i].length ; k++){
            count+=name[i].charCodeAt(k)
        }if(count%2===1){
            arr.push(list[i])
        }
    }return arr
  }
  var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];
  
  var answer1 = [
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];
  
  console.log(findOddNames(list1));
  
  
  var list2 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  ];
  
  var answer2 = [];
  
  console.log(findOddNames(list2) );
  