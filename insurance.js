function insurance(age, size, numofdays){
    //code here
    let cost = 0
    let plus =0
    if(age<25){plus+=10}
    switch(size){
        case 'economy': plus+=0
        break
        case 'medium': plus+=10
        break
        case 'full-size': plus+=15
        break
        default : plus+=15
    }
    cost+=(numofdays*(50+plus))
    return numofdays>0?cost:0
    }
console.log(insurance(36, "economy", 3), 150);
console.log(insurance(30,"full-size",30),1950);

console.log(insurance(11, 'economy' ,80), 4800);
console.log(insurance(42,"my custom car",7), 455);
/*
Age (integer) : There is a daily charge of $10 if the driver is under 25

Car Size (string) : There may be an additional daily charge based on the car size:

car size surcharge "economy" $0 "medium" $10 "full-size" $15

Rental Days (integer) : There is a base daily charge of $50 for renting a car.

Simply multiply the one day cost by the number of days the car is rented in order to get the full cost.

Note: Negative rental days should return 0 cost. 

Any other car size NOT listed should come with a same surcharge as the "full-size", $15.
*/