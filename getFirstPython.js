function getFirstPython(list) {
    // Thank you for checking out my kata :)
    let str =''
    let count =0
    let count1 = 0
    for(let i = 0 ;i<list.length ; i++){
        if(list[i].language==='Python'){
            str+=`${list[i].firstName}, ${list[i].country}`
            count1+=1
            break
        }else if(list[i].language!=='Python'){
            count+=1
        }
    }
    return count1>0&&count!=list.length?str:`There will be no Python developers`
  }
  var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];
  
  var list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
  ];
  
  console.log(getFirstPython(list1), 'Victoria, Puerto Rico');
  console.log(getFirstPython(list2), 'There will be no Python developers');
  