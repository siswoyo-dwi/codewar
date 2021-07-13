const rps = (p1, p2) => {
    console.log(p1,p2)
    if('scissors','paper'){return 'Player 1 won!'}
    if('scissors','rock'){return 'Player 2 won!'}
    if('scissors','scissors'){return 'Draw!'}
    if('paper','rock'){return 'Player 1 won!'}
    if('paper','scissors'){return 'Player 2 won!'}
    if('paper','paper'){return 'Draw!'}
    if('rock','scissors'){return 'Player 1 won!'}
    if('rock','paper'){return 'Player 2 won!'}
    if('rock','rock'){return 'Draw!'}
  };
  console.log(rps('rock', 'scissors'), getMsg(1));
  console.log(rps('scissors', 'paper'), getMsg(1));
  console.log(rps('paper', 'rock'), getMsg(1));
  console.log(rps('scissors', 'rock'), getMsg(2));
  console.log(rps('paper', 'scissors'), getMsg(2));
  console.log(rps('rock', 'paper'), getMsg(2));
  console.log(rps('rock', 'rock'), 'Draw!');
  console.log(rps('scissors', 'scissors'), 'Draw!');
  console.log(rps('paper', 'paper'), 'Draw!');