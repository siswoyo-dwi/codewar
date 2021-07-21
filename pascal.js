  function calculate(c, r) {
    if ( c == r || c == 1 )
      return 1;
    else
      return calculate(c-1, r-1) + calculate(c, r-1);
  }
function pascal(depth) {
    var results = [];
    var temp = [];
    for (var r=1; r <= depth; r++) {
      for (var c=1; c <= r; c++) {
        temp.push(calculate(c, r));
      }
      results.push(temp);
      temp = [];
    }
    return results;
  }
  

  
  console.log(pascal(10), [[1],[1,1],[1,2,1],[1,3,3,1]]);
