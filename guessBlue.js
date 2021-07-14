function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blue = blueStart-bluePulled
    let red = redStart-redPulled
    return blue/(red+blue)
  }
  console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);