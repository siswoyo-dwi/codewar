function orderFood(list) {
  // thank you for checking out the Coding Meetup kata :)
  let obj ={}
  for(let i = 0 ;i<list.length ; i++){
      let count = 0
  for(let k = 0 ;k<list.length ; k++){
      if(list[i].meal==list[k].meal){
          count+=1
          }obj[list[i].meal]=count
      }
  }
      return obj
}
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];

var answer = { vegetarian: 2, standard: 1, vegan: 1 };

console.log(orderFood(list1), answer);
