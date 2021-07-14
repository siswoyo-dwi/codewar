function symmetricPoint(p, q) {
    let a = 0
    let b = 0
    if(q[0]>=0&&p[0]>=0){a+=((q[0])*2)-p[0]}
    if(q[1]>=0&&p[1]>=0){b+=((q[1])*2)-p[1]}
    if(q[0]>=0&&p[0]<0)a+=((Math.abs(q[0])*2)+Math.abs(p[0]))
    if(q[1]>=0&&p[1]<0)b+=((Math.abs(q[1])*2)+Math.abs(p[1]))
    if(q[0]<0&&p[0]<0)a-=((Math.abs(q[0])*2)-Math.abs(p[0]))
    if(q[1]<0&&p[1]<0)b-=((Math.abs(q[1])*2)-Math.abs(p[1]))
    if(q[0]<0&&p[0]>=0)a-=((Math.abs(q[0])*2)+Math.abs(p[0]))
    if(q[1]<0&&p[1]>=0)b-=((Math.abs(q[1])*2)+Math.abs(p[1]))

    return [a,b]
  }
  console.log(symmetricPoint([ 963, 466 ], [ 882, 469 ]), [801, 472]);
  console.log(symmetricPoint([ 257, -303 ] ,[ 857, -516 ]), [1457, -729]);
  console.log(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
  console.log(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
  console.log(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
  console.log(symmetricPoint([ -772, 647 ] ,[ -340, -138 ]), [92, -923]);