Array.prototype.reverse = function() {
    // ...
    
    for(let i = this.length-1;i>=0;i-- ){
    this.push(this[i])
    }for(let i = (this.length/2)-1;i>=0;i-- ){
    this.shift()
    } return this
  };
console.log([1, 2, 3, 4].reverse(), [4,3,2,1]);
console.log(["a", "b", "c"].reverse(), ["c", "b", "a"]);
console.log([].reverse(), []);