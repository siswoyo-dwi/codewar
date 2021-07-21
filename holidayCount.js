function holidayCount (a1, a2){
    //enter code here
    for(let i = 0 ;i<a1.length; i++){
        for(let k = 0 ;k<a2.length ; k++){
        if(typeof a2[k]=='number'&&typeof a1[i]=='number'){
            return a1[i]>a2[k]?'Right':a1[i]===a2[k]?'Same':'Wrong'
            }
        }
      }
    }
var a1 = ["g", 3, "a"]

var a2 = ["j", 2, "r"]
console.log(holidayCount(a1, a2), "Right")

var a1 = ["code", "is", "good", "I", "hope", 35]

var a2 = [102, "and", "hopefully", "also", "this", "passes"]
console.log(holidayCount(a1, a2), "Wrong")

