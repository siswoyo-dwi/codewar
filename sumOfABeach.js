function sumOfABeach(beach) {
    let count = 0
    let a = beach.toLowerCase().split('')
    let b = ''
    for(let i = 0 ;i<a.length-1 ; i++){
        let tri = b+a[i]+a[i+1]+a[i+2]
        let four = b+a[i]+a[i+1]+a[i+2]+a[i+3]
        let five = b+a[i]+a[i+1]+a[i+2]+a[i+3]+a[i+4]
        switch(tri){
            case 'sun':count+=1
            break
        }
        switch(four){
            case 'sand':count+=1
            break
            case 'fish':count+=1
            break
        }
        switch(five){
            case 'water':count+=1
            break
        }

    }
    return `${count}`
  }
console.log(sumOfABeach("WAtErSlIde"),'==>  1');
console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"),'==>  3');
console.log(sumOfABeach("gOfIshsunesunFiSh"), '==>  4') ;
console.log(sumOfABeach("cItYTowNcARShoW"),   '0');