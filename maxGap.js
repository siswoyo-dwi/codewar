function maxGap (numbers){
    //your code here
    let a = numbers.sort((a,b)=>(b-a))
    let b =0
    for(let i = 0 ;i<a.length-1 ; i++){
        a[i]-a[i+1] > b ?b=a[i]-a[i+1]:b
    }return b
  }
  console.log(maxGap([13,10,2,9,5]),4);
  console.log(maxGap([13,3,5]),8);
  console.log(maxGap([24,299,131,14,26,25]),168);
  console.log(maxGap([-3,-27,-4,-2]),23);
  console.log(maxGap([-7,-42,-809,-14,-12]),767);
  console.log(maxGap([12,-5,-7,0,290]),278);
  console.log(maxGap([-54,37,0,64,-15,640,0]),576);
  console.log(maxGap([130,30,50]),80);
  console.log(maxGap([1,1,1]),0);
  console.log(maxGap([-1,-1,-1]),0);
