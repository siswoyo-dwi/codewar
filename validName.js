function validName(array){
if(array.length < 1){return 'You must test at least one name.'}
if(array.length == 1){return "Congratulations, you can choose any name you like!"}
    let count=0
for(let i = 0 ;i<array.length-1 ; i++){
    if((array[i][array[i].length-1].toLowerCase())==(array[i+1][0].toLowerCase())){
            count+=1
        }
    }
    return count==array.length-1?"Congratulations, your baby names are compatible!":"Back to the drawing board, your baby names are not compatible."
} 
console.log(validName(["Cruz", "Zuma"]), "Congratulations, your baby names are compatible!" , "Test failed");
console.log(validName(["Buddy Bear","Romeo", "Olive"]), "Congratulations, your baby names are compatible!" , "Test failed");
console.log(validName(["Peaches", "Saint", "Theodora", "Ava", "Apple", "Egypt", "Tallulah", "Harlow", "Willow", "Weston", "Nala", "Atlas", "Silas", "Sundance", "Esmeralda", "Angel", "Lily-Rose", "Ever", "Rebel", "Lourdes"]), "Congratulations, your baby names are compatible!" , "Test failed");
console.log(validName(["Jaden"]),"Congratulations, you can choose any name you like!", "Test failed");
console.log(validName(["George", "Charlotte"]),"Back to the drawing board, your baby names are not compatible.", "Test failed");
