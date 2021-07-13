function yearDays(year){
    if(year>=0){
        if(year%100==0){
            return year%400===0?`${year} has 366 days`:`${year} has 365 days`
        }else if(year%100!=0){
            return (year == 0) || (year%4===0)? `${year} has 366 days`:`${year} has 365 days`
        }
      }
    else if(year%100==0){
      return year%400===0?`${year} has 366 days`:`${year} has 365 days`
    }else{
      return year%4===0?`${year} has 366 days`:`${year} has 365 days`
    }
  }
console.log(yearDays(900), '0 has 366 days');
console.log(yearDays(700), '-64 has 366 days');
console.log(yearDays(1500), '2016 has 366 days');
console.log(yearDays(2000), '1974 has 365 days');
console.log(yearDays(-10), '-10 has 365 days');
console.log(yearDays(666), '666 has 365 days');
console.log(yearDays(1857), '1857 has 365 days');