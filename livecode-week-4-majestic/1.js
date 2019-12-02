/**
 * ===================
 * SECRET PHONE NUMBER
 * ===================
 * 
 * 
 * Function ini akan mengubah 5 digit di belakang nomor handphone, menjadi '*', 
 * 
 * contoh : 
 *  1. input: "081267465370" -> 5 angka dibelakangnya adalah 65370
 *     output: "0812674*****"
 *  2. input: "08537582711" -> 5 angka dibelakangnya adalah 82711
 *     output: "085375*****"
 * 
 *  - Jika nomor handphone kurang dari 10 digit, maka function akan mereturn:
 *      "Invalid phone number"
 * 
 * RULES: 
 *  1. Wajib menggunakan pseudocode
 *  
 */

/**
 * PSEUDOCODE
 * 
 * STORE numbers to numbersContainer
 * IF the length of numbers is not equal to 10
 *  RETURN 'Invalid phone number'
 * FOR the length of numbers subtracted by 5
 *  numbersContainer added by every designated index of numbers
 * FOR the length of numbersContainer
 *  numbersContainer added by '*' until its length reaches numbers' length
 * RETURN numbersContainer
 */

function secretPhoneNumber(numbers) {
  // your code here
  let numbersContainer = '';

  if (numbers.length < 10) {
    return 'Invalid phone number';
  }
  
  for (let i = 0; i < numbers.length - 5; i++) {
    numbersContainer += numbers[i];
  }

  for (let j = numbersContainer.length; j < numbers.length; j++) {
    numbersContainer += '*';
  }

  return numbersContainer;
}

console.log(secretPhoneNumber("081267465370"))
// 0812674*****
console.log(secretPhoneNumber("08537582711"))
// 085375*****
console.log(secretPhoneNumber("085758271523"))
// 0857582*****
console.log(secretPhoneNumber("0811739915"))
// 08117*****
console.log(secretPhoneNumber("08238797"))
// "Invalid phone number"