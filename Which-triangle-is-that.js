var typeOfTriangle = function (sideA, sideB, sideC) {
    let arr=[sideA, sideB, sideC]
    let counter = 0
    let newArr=[]
if(arr[0]>arr[1]&&arr[0]>arr[2]){newArr.push(arr[0]);newArr.push(arr[1]);newArr.push(arr[2])}
if(arr[1]>arr[2]&&arr[1]>arr[0]){newArr.push(arr[1]);newArr.push(arr[0]);newArr.push(arr[2])}
if(arr[2]>arr[1]&&arr[2]>arr[0]){newArr.push(arr[2]);newArr.push(arr[1]);newArr.push(arr[0])}
if(arr[0]==arr[1]||arr[0]==arr[2]){newArr.push(arr[0]);newArr.push(arr[1]);newArr.push(arr[2])}
if(arr[1]==arr[2]||arr[1]==arr[0]){newArr.push(arr[1]);newArr.push(arr[0]);newArr.push(arr[2])}
if(arr[2]==arr[1]||arr[2]==arr[0]){newArr.push(arr[2]);newArr.push(arr[1]);newArr.push(arr[0])}

let sorty = newArr[0]<newArr[1]+newArr[2]?true:false

let triangle=(typeof sideA==='number')&&(typeof sideB==='number')&&(typeof sideC==='number')&&(sideA>0)&&(sideB>0)&&(sideC>0)?true : false
if(triangle==false||sorty==false){return "Not a valid triangle"}
    if(triangle==true){
        if(arr[0]==arr[1]){counter+=1}
            if(arr[1]==arr[2]){counter+=1}
                if(arr[2]==arr[0]){counter+=1}   
                    
                if(counter==3){return "Equilateral"}
            if(counter==1){return "Isosceles"}
        if(counter==0){return "Scalene"}
    }
}
console.log(typeOfTriangle(1,1,1), "Equilateral");

console.log(typeOfTriangle(3,2,4), "Scalene");

console.log(typeOfTriangle(2,2,1), "Isosceles");

console.log(typeOfTriangle(2, 2, 8), "Not a valid triangle");