function addUsername(list) {
    // thank you for checking out the Coding Meetup kata :)
    let arr=[]
    for(let i = 0 ;i<list.length ; i++){
        list[i].username=`${(list[i].firstName).toLowerCase()}${((list[i].lastName).toLowerCase())[0]}${(2020-+(list[i].age))}`
        arr.push(list[i])
    }return arr
  }
  var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];
  console.log(addUsername(list1),[
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
      username: 'emilyn1990' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
      username: 'nore2000' }
  ])