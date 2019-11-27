/**
 * ============
 * Diagon Alley
 * ============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang dapat menampilkan input secara diagonal seperti berikut:
 * 
 * Example
 * -------
 * @input = 'Hacktiv8'
 * @output =
 * H
 *  a
 *   c
 *    k
 *     t
 *      i
 *       v
 *        8
 */

function diagonAlley(str) {
  // Write your code here
  let strResult = '';
  let spaces = '';
  for (let i = 0; i < str.length; i++) {
    strResult += spaces + str[i] + '\n';
    spaces += ' ';
  }

  return strResult;
}

// TEST CASES
console.log(diagonAlley('yusuf'))
/*
y
 u
  s
   u
    f
*/
console.log(diagonAlley('adiel'))
/*
a
 d
  i
   e
    l
*/
console.log(diagonAlley('tony'))
/*
t
 o
  n
   y
*/