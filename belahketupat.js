let n = 99

for(let i = 0 ;i<n ; i++){
let a =''
let b =''
	if(i<(n+1)/2){
		for(let k = (n-1)/2-1 ;k>=0+i ;k--){
			a+=' '
			}
		
		for(let l = 0 ;l<(i*2)+1 ;l++){
			b+='*'
			}

		}

	else if(i>=(n+1)/2){
		for(let k = (i*2)/2+1 ;k>(n+1)/2 ;k--){
			a+=' '
			}
		
		for(let l = i*2 ;l<n*2-1 ;l++){
			b+='*'
			}

		}
    console.log(a+b)
}
