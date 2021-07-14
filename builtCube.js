function generateShape(int){
    let str=''
for(let i = 0 ;i<int;i++){
    str+='\n'
    for(let k = 0 ;k<int;k++){
        str+='+'
    }
}return str
}
console.log( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )
 