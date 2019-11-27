/**
 * =============
 * Word Triangle
 * =============
 * 
 * Instruction
 * -----------
 * Tulislah kode untuk menampilkan kata dan membentuk segitiga seperti berikut:
 * 
 * Example
 * -------
 * @input = 'yusuf'
 * @output =
 * y
 * yu
 * yus
 * yusu
 * yusuf
 */

var input = 'adiel'
// Write your code here

var input2 = '';

for (let i = 0; i < input.length; i++) {
    input2 += input[i];
    console.log(input2);
}