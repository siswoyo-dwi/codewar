var Calculator = {
    average: function(...arguments) {
     // Your code here... 
      let total = 0
      for(let i = 0 ;i<arguments.length ; i++){
        total+=arguments[i]
      }return total/arguments.length
    }
   };

   