function roundIt(n){
    let a = n.toString().split(".");
        if (a[0].length > a[1].length) {
            return Math.floor(n);
    } else if (a[0].length < a[1].length) {
            return Math.ceil(n);
        } else 
            {
            return Math.round(n);
        }
    }
console.log(roundIt(998914.3) , 998914);
console.log(roundIt(784285.88) , 784285);
console.log(roundIt(675947.23) , 675947);