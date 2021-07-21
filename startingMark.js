function startingMark(bodyHeight){
    // Remember: Body height of 1.52 m --> starting mark: 9.45 m
    //           Body height of 1.83 m --> starting mark: 10.67 m
    // All other starting marks are based on these guidelines!

    let x= (11.85-9.45)/(2.13-1.52)
    return Math.round((x*bodyHeight+11.85-x*2.13)*100)/100
  }
console.log(startingMark(1.52), 9.45)
console.log(startingMark(1.83), 10.67)
console.log(startingMark(1.22), 8.27)
console.log(startingMark(2.13), 11.85)
