// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//first loop over string
//next split apart string into an array
//next return array in a reversed order
//return reveresed array string into a string 
const reverse = (str) => {
  return str.split('').reduce((rev, char) => char + rev, '');
};

module.exports = reverse;

//solution 1
// const reverse = (str) => {
//   return str.split("").reverse().join("")

// }

//solution 2
// const reverse = (str) => {
//   let reversed = ''
//   for ( let character of str) {
//     reversed = character + reversed 
//     console.log(character)
//   }
//   return reversed
// }