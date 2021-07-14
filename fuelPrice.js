function fuelPrice(litres, pricePerLitre) {
  let discount = 0
  let off=Math.floor(litres/2)*0.05
  off>=0.25?discount = 0.25:discount=off
  return (litres*pricePerLitre)-(discount*litres)
}

console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.40);
console.log(fuelPrice(88,18.99),1649.12);
