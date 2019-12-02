/**
 * ================
 * Pair Programming
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah funtion pair untuk mengembalikan sebuah array of names, dimana names tersebut
 * adalah pasangan dari 2 nama yang digabung ke dalam 1 string, jika ada yang tidak mendapatkan
 * pasangan maka orang tersebut dianggap sendirian.
 * 
 * Example
 * -------
 * @input = 'vindo,marcel,isni,ajeng,kevin'
 * proses:
 * vindo dipasangkan dengan marcel -> 'vindo dan marcel'
 * isni dipasangkan dengan ajeng -> 'isni dan ajeng'
 * kevin tidak punya pasangan -> 'kevin sendirian'
 * 
 * maka @output = [
 *  'vindo dan marcel',
 *  'isni dan ajeng',
 *  'kevin sendirian'
 * ]
 * 
 * Rules
 * -----
 * 1. Tidak boleh menggunakan built-in function: split, slice, splice, join
 */

function pair(str) { 
  // Write your code here

  function myOwnSplit() {
    let tampunganAwal = '';
    let tampunganAkhir = [];

    // My own split method
    for (let i = 0; i < str.length+1; i++) {
      if (str[i] === ',' || i === str.length) {
        tampunganAkhir.push(tampunganAwal);
        tampunganAwal = '';
      }
      if (str[i] !== ',') {
        tampunganAwal += str[i];
      }
    }

    return tampunganAkhir;
  }
  
  let names = myOwnSplit();
  let result = [];
  
  if (str === '' || undefined || null) {
    return 'No pair';
  }

  for (let i = 0; i < names.length; i++) {
    if (names.length-1 !== i) {
      result.push(`${names[i]} dan ${names[i + 1]}`);
    } else {
      result.push(`${names[i]} sendirian`);
    }
    i++;
  }

  return result;
}

console.log(pair('yusuf,tony,adiel'))
// [ 'yusuf dan tony', 'adiel sendirian' ]

console.log(pair('fajrin,sahata,onesinus,jetly'))
// [ 'fajrin dan sahata', 'onesinus dan jetly' ]

console.log(pair('refqi,fahmi,sinung,arif,gusti'))
// [ 'refqi dan fahmi', 'sinung dan arif', 'gusti sendirian' ]

console.log(pair(''))
// No pair