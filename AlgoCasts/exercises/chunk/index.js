// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
  // Creat empty 'chunked' array
  const chunked = []
  // Create 'index' start at 0
  let index = 0
  
  while(index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }
  //while index is less than array.length
  //push a slice of length 'size' from 'array' into 'chunked'
  //add 'size' to 'index'
  
  return chunked
}

module.exports = chunk;

// const chunk = (array, size) => {
//   // Create empty array to hold chunks called 'chunked'
//   const chunked = [];
//   // For each element in the *unchunked* array
//   for (let element of array){
//   // Retrieve the last element in 'chunked'
//     const last = chunked[chunked.length - 1]
//     if (!last || last.length === size) {
//   // If last element does not exist, or if its length is equal to chunk size
//   // Push a new chunk into 'chunked' with the current element
//       chunked.push([element])
//     } else { 
//   // Else add the current element into the chunk
//       last.push(element)
//     }
// }
//    return chunked
// }
