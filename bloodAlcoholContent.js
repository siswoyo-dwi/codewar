function bloodAlcoholContent(drinks, weight, sex, time){
    return sex=='male'?+((drinks.abv*drinks.ounces*5.14)/weight*0.73-0.015*time).toFixed(4):+((drinks.abv*drinks.ounces*5.14)/weight*0.66-0.015*time).toFixed(4)
  }
  console.log(bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1), 0.0837)
console.log(bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1), 0.1758);
console.log(bloodAlcoholContent({ounces:50, abv:0.14}, 250,'male', 3), 0.0601);
console.log(bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2), 0.2414);
