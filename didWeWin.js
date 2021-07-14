function didWeWin(plays){
    let yard =10
    for(let i = 0;i<plays.length;i++){
        switch(plays[i][1]){
            case 'pass': yard-=plays[i][0]
            break
            case 'run': yard-=plays[i][0]
            break
            case 'sack': yard+=plays[i][0]
            break
            case 'turnover': yard+=plays[i][0]
            break
        }
        if(yard<0){
            break
        }
    }return yard<0
  }
  console.log(didWeWin([[ [ 5, 'pass' ], [ 5, 'pass' ], [ 10, 'sack' ], [ 10, 'run' ] ]]), true)
  console.log(didWeWin([[ 4, 'pass' ], [ 5, 'run' ], [ 1, 'run' ], [ 3, 'turnover' ]]), true)
  console.log(didWeWin([[2, "run"],[5, "pass"],[3, "sack"],[8, "pass"]]), true)
  console.log(didWeWin([[5, "pass"],[6, "turnover"],[],[]]), false)
