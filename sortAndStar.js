
function twoSort(s) {
    let arr=[]
    let newArr=[]
    let result=[]
    let last=[]
    let poin=[]
    
    for(let i = 0 ; i <s.length ;i++){
        arr.push(s[i].charCodeAt([0]))
    }
    for(let i = 0 ; i <s.length ;i++){
        let count = 0 
        for(let k = 0 ; k <arr.length ;k++){
            if(arr[i]>arr[k]){count+=1}
        }newArr.push(count)
    }
    for(let i = 0 ; i <s.length ;i++){
        if(newArr[i]==0){
            result.push(s[i])
        }
    }
    if(result.length==2){
        if(result[0]==result[1]){result.pop()}
    }
    if(result.length>2){
        for(let i = 0 ; i < result.length; i++){
            for(let k = 0 ; k < result.length; k++){
                if(result[i]==result[k]){
                    result.splice([k],1)
                }
            }
        }
    }
    if(result.length<2){
        let a= result.toString().split('')
        for(let i = 0 ; i <a.length-1 ;i++){
            last.push(a[i]+'***')
        }
    
        return last.join('')+a[a.length-1]
    }
    if(result.length>1){
        for(let h = 0 ;h<10 ; h++){
            
            if(result[0].charCodeAt(h)!==result[1].charCodeAt(h)){
                console.log(result[0].charCodeAt(h),result[1].charCodeAt(h))
                poin.push(h)
            }
        }
        result[0].charCodeAt(poin)>result[1].charCodeAt(poin)?last.push(result[0]):last.push(result[1])
        console.log(last)
        let a= last.toString().split('')
        for(let i = 0 ; i <a.length-1 ;i++){
            last.push(a[i]+'***')
        }
    
        let c = last.shift()
        return last.join('')+a[a.length-1]
    }
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
console.log(twoSort(["DarkCoin","Dash","Factom","LiteCoin","Mine","ProofOfStake","ProofOfWork","Steem"]),'D***a***s***h');
console.log(twoSort(["BTC","Bitcoin","Bitcoin","Classic","Dogecoin","Ethereum","Factom","Lisk","MadeSafeCoin","MadeSafeCoin","Mine","Mine","ProofOfWork","ProofOfWork","Steem","Waves","Waves","Waves"]),'B***i***t***c***o***i***n'); 
console.log(twoSort(["DarkCoin","Dash","Dash","Dash","Factom","Factom","Waves"]),'D***a***s***h');
console.log(twoSort(["DarkCoin","Dogecoin","Lisk","MadeSafeCoin"]),'D***o***g***e***c***o***i***n');