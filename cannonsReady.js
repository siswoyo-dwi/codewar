const cannonsReady = (gunners) => {

 let arr=[]
 let x = n => n=='aye'
    for (let i in gunners) {
        arr.push(gunners[i])
    }return arr.every(x)?'Fire!':'Shiver me timbers!'
  }
  var a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
    b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

  console.log(cannonsReady(a), 'Fire!');
  console.log(cannonsReady(b), 'Shiver me timbers!');
