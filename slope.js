function slope(points){
    let poinA = (points[1]-points[3])
    let poinB = (points[0]-points[2])
    if(poinA!=0&&poinB!=0){
    let poin = (points[1]-points[3])/(points[0]-points[2])
      return `${poin}`
      }
    if(poinA==0||poinB==0){
      return 'undefined'
      }
}
console.log( slope([19,3,20,3]), "0" );
console.log( slope([2,7,4,-7]), "-7" );
console.log( slope([10,50,30,150]), "5" );
console.log( slope([15,45,12,60]), "-5" );
console.log( slope([10,20,20,80]), "6" );
console.log( slope([-10,6,-10,3]), "undefined" );