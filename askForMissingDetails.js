function askForMissingDetails(list) {
    // thank you for checking out the Coding Meetup kata :)
    let obj =new Set()
    for(let i = 0 ;i<list.length ; i++){
        if(list[i].firstName==null){
            list[i].question='Hi, could you please provide your firstName.'
            obj.add(list[i])
        }
        else if(list[i].lastName==null){
            list[i].question='Hi, could you please provide your lastName.'
            obj.add(list[i])
        }
        else if(list[i].country==null){
            list[i].question='Hi, could you please provide your country.'
            obj.add(list[i])
        }
        else if(list[i].continent==null){
            list[i].question='Hi, could you please provide your continent.'
            obj.add(list[i])
        }
        else if(list[i].age==null){
            list[i].question='Hi, could you please provide your age.'
            obj.add(list[i])
        }
        else if(list[i].language==null){
            list[i].question='Hi, could you please provide your language.'
            obj.add(list[i])
        }  
    }
        return [...obj]
  }
  var list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  
  var answer1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
    question: 'Hi, could you please provide your firstName.' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
    question: 'Hi, could you please provide your language.' }
  ];
  
  console.log(askForMissingDetails(list1));
  
  
  var list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  
  var answer2 = [];
  
  console.log(askForMissingDetails(list2));
  
   