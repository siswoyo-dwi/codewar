function isAgeDiverse(list) {
    // thank you for checking out the Coding Meetup kata :)
    let ages = ['teens', 'twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties', 'nineties','over100']
    let setAge=new Set()
    for(let i = 0 ;i<list.length ; i++){
        for(let k= 0 ;k<ages.length ; k++){
            if(list[i].age<20){setAge.add('teens')}
            else if(list[i].age<30){setAge.add('twenties')}
            else if(list[i].age<40){setAge.add('thirties')}
            else if(list[i].age<50){setAge.add('forties')}
            else if(list[i].age<60){setAge.add('fifties')}
            else if(list[i].age<70){setAge.add('sixties')}
            else if(list[i].age<80){setAge.add('seventies')}
            else if(list[i].age<90){setAge.add('eighties')}
            else if(list[i].age<100){setAge.add('nineties')}
            else{setAge.add('over100')}
        }
    }
    return ages.length==setAge.size
  }
  const list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  ];

  const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
  ];

  const list3 = [
    { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
    { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
  ];

  console.log(isAgeDiverse(list1), true);
  console.log(isAgeDiverse(list2), false);
  console.log(isAgeDiverse(list3), false);
