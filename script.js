//What is the difference between the sum of the squares of the first 
//ten natural numbers, and the square of the sum of the first ten 
//natural numbers
let sumNum = 0;
let eachNumSquare = 0;  

for (let i = 1; i <= 10; i++) {
    eachNumSquare += i * i;
    sumNum += i;
}
let allNumSquare = sumNum * sumNum;
let diffSquare = allNumSquare - eachNumSquare;

console.log(diffSquare);
//Difference = 2640
  












