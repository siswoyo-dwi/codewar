function cutCube(volume,n){
    let a = Math.ceil(Math.cbrt(n))
    let b = Math.floor(Math.cbrt(n))
    let c = Math.ceil(Math.cbrt(volume/n))
    let d = Math.floor(Math.cbrt(volume/n))
    return a==b&&c==d
  }
  console.log(cutCube(5832,216 )    , true);
  console.log(cutCube(512,8)    , true);
  console.log(cutCube(27,27)    , true);
  console.log(cutCube(512,8)    , true);
  console.log(cutCube(512,64)   , true);
  console.log(cutCube(50000,50) , false);
  console.log(cutCube(432,16)   , false);
  console.log(cutCube(256,8)    , false);
  console.log(cutCube(27,3)     , false);
  console.log(cutCube(123,456)  , false);
  console.log(cutCube(27,8)    , false);