function getStrings(city){
    let a =  city.toLowerCase().replace(' ','').replace(' ','').split('')

    let obj = new Set()
    let arr =[]
    let newArr=[]
    for(let i=0 ;i<a.length; i++){
        obj.add(a[i])
    }for (let item of obj){arr.push(item);newArr.push(item)}
    for(let i = 0 ; i <arr.length ; i++){
        newArr[i]+=':'
    }for(let i = 0 ; i <obj.size ; i++){
        for(let k = 0 ; k <a.length ; k++){
            
            if(a[k]===arr[i]){newArr[i]+='*'}
        }
    }
    return newArr.toString()
  }
  console.log(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
  console.log(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
  console.log(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
  console.log(getStrings("New York City"), "l:*,a:**,s:**,v:*,e:*,g:*");
