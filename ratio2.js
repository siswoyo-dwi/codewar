function aspectRatio(x,y,constant){
    if(x>y){
        switch(constant){
            case 'height':return [Math.ceil((16/9)*y),y]
            case 'width':return [x,Math.ceil((9/16)*x)]
            case 'diagonal':return [Math.ceil(1.09*x),Math.ceil(0.82*y)]
            case 'area':return [Math.ceil(1.155*x),Math.ceil(0.867*y)]
        }
    }
    if(x<y){
        switch(constant){
            case 'height':return [Math.ceil((16/9)*y),y]
            case 'width':return [x,Math.ceil((9/16)*x)]
            case 'diagonal':return [Math.ceil(0.85355*y),Math.ceil(1.393*x)]
            case 'area':return [Math.ceil(1.155*x),Math.ceil(0.867*y)]
        }
    }
}
console.log(aspectRatio(374, 280, "height"), [498 ,280]);
console.log(aspectRatio(374, 280, "width"), [374 ,211]);
console.log(aspectRatio(374, 280, "diagonal"), [408 ,230]);
console.log(aspectRatio(374, 280, "area"), [432 ,243]);
console.log(aspectRatio(165 ,478 ,'diagonal'), [408 ,230]);
console.log(aspectRatio(3161 ,3811, "diagonal"), [4316, 2428]);
