/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function simpleArraySum(ar: number[]): number {
  const longitud = ar.length
  let sum = 0 
  for(let index = 0 ; index < longitud ; index++){
      const elemento = ar[index];   
      sum = elemento + sum;  
  }
      return sum;
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [1, 2, 3, 4, 10, 11];
  const result = simpleArraySum(testArray);
  console.log('Result: ', result);
}

main();
