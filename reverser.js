function reverser(sentence) {
	let a = sentence.split(' ')
    let arr=[]
    for(let i = 0 ;i<a.length ; i++){
        let newArr=[]
        for(let k = a[i].length-1 ;k>=0 ; k--){
            newArr.push(a[i][k])
        }let b = newArr.join('')
        arr.push(b)
    }
    return arr.join(' ')
}
console.log(reverser("Hi mom"), 'iH mom');
console.log(reverser("friendzone"), 'enozdneirf');
console.log(reverser(" "), ' ');
