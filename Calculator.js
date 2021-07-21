var Calculator = {
    add :function(a,b) {
        return a+b
        },
    divide :function(c,d) {
        if(c==0||d==0){return false}
        else{return c/d}
           },
    subtract :function(e,f) {
        return e-f
           },
    multiply :function(g,h) {
        if(g==0||h==0){return false}
        else{return g*h}
           },
    };
    
    console.log(Calculator.divide(5,0))