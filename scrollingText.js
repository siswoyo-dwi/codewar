function scrollingText(text){
    let str=text.toUpperCase()
    let arr = []
    for(let i = 0 ; i<str.length;i++){
        let newArr=[]
        for(let k = 0 ; k<str.length;k++){
            let z = k+i
            if(z>=str.length){
                z-=str.length
            }
            newArr.push(str[z])

        }arr.push(newArr.join(''))
    }return arr
}
console.log(scrollingText("abc"), ["ABC","BCA","CAB"])
