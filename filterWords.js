function filterWords(phrase){
    return     phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig,'awesome')
   }
   console.log(filterWords("You're Bad! timmy!"),"You're awesome! timmy!");
   console.log(filterWords("You're MEAN! timmy!"),"You're awesome! timmy!");
