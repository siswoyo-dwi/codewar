function findAdmin(list, lang) {
    // thank you for checking out the Coding Meetup kata :)
    let arr=[]
    for(let i = 0 ;i<list.length ; i++){
        if(list[i].githubAdmin=='yes'&&list[i].language==lang)
        arr.push(list[i])
    }return arr
  }
  var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ];
  
  var answer1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
  ];
  
  console.log(findAdmin(list1, 'JavaScript'), answer1);
  console.log(findAdmin(list1, 'Ruby'), []);
  console.log(findAdmin(list1, 'Python'), []);
   