// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
// const fizzBuzz = () => {
//   for (i=0; i<=100 ; i++) {
//     if (i%5 === 0 && i%3 === 0) {
//       // return "fizzbuzz";
//       console.log("fizzBuzz");
//     } else if (i%5 === 0){
//       // return "buzz";
//       console.log("buzz");
//     } else if (i%3 === 0){
//       // return "fizz";
//       console.log("fizz");
//     } else {
//       // return i;
//       console.log(i);
//     }
//   };
// }

function fizzBuzz(n) {
  for (i=1; i<=n; i++){
    //if the number is a multiple of both 3 and 5 print fizzBuzz
    if (i%15 === 0){
      console.log('fizzbuzz')
    } else if (i%5 === 0){
      console.log('buzz');
    } else if (i%3 === 0){
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}


module.exports = fizzBuzz;
