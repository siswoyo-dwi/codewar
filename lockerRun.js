function lockerRun(lockers){
    let arr =[]
    let i = 1
do{arr.push(i*i)
    i++
}while(lockers>=(i*i))
return arr

}
console.log(lockerRun(4),[1])
console.log(lockerRun(9),[1])
console.log(lockerRun(25),[1])