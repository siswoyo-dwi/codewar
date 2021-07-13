var sing=function(){let a = []
    for(let i = 0;i<=199;i++){
    if(i==195){a.push('Take one down and pass it around, 1 bottle of beer on the wall.')}
    if(i==196){a.push('1 bottle of beer on the wall, 1 bottle of beer.')}
    if(i==197){a.push('Take one down and pass it around, no more bottles of beer on the wall.')}
    if(i==198){a.push('No more bottles of beer on the wall, no more bottles of beer.')}
    if(i==199){a.push('Go to the store and buy some more, 99 bottles of beer on the wall.')} 
    if(i<195){
    if(i==0){a.push(`${99} bottles of beer on the wall, ${99} bottles of beer.`)}
    if(i==1){a.push(`Take one down and pass it around, ${98} bottles of beer on the wall.`)}
    if(i>1&&i%2==0){a.push(`${99-(i/2)} bottles of beer on the wall, ${99-(i/2)} bottles of beer.`)}
    if(i>1&&i%2==1){a.push(`Take one down and pass it around, ${99-(i/2)-0.5} bottles of beer on the wall.`)}
    }
    }return a
    }
    let song = sing();
    console.log(song[0], '99 bottles of beer on the wall, 99 bottles of beer.');
    console.log(song[199], 'Go to the store and buy some more, 99 bottles of beer on the wall.');
