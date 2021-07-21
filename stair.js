function stairs(n)
{  var moving;
     //move to top
     for(let i = 1 ;i<=n; i++){
        let str = 0
        for(let k = (n*4)+1 ;k>0; k--){
            if(k%2==0){str+=' '}
            else if(k==(n*4)+2-i){
               str+=i
            }

        }str+='\n'
        moving+=str
     }return moving
}
console.log(stairs(3),"        1 1\n    1 2 2 1\n1 2 3 3 2 1");
