function lyricsPrint(lyric){
    console.log(lyric)
    let arr = []
    
    for(let i=0;i<lyric.length;i++){
        
        
        for(let k=0;k<lyric[i].length;k++){
            
            let a=''
            for(let j=0;j<lyric[i][k].length;j++){
                a+=lyric[i][k][j]
            if(k==0){
                arr.push([a+'_'])
            }
            if(k>0){
                arr.push([lyric[i][k-1],a+'_'])
                if(j===lyric[i][k].length-1){break}
                }
            }
        }
    }return arr
}
const lyrics1 = [
  ['Hey','you','wow'],
  ['Good','luck','wow'],
  ['wow','wouow','wow']
];
console.log(lyricsPrint(lyrics1))