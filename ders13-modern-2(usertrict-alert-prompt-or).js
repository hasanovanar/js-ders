// 8/9/2024

// "use strict" faylin evvelinde olmalidir. Ondan qabaq ancaq koment ola biler

// console.log("Hello");

// use strict funksiyanin icinde de ola biler, blokun icinde de ola biler

// Numune
/*
 function hello() {
 "use strict"
 console.log("hello")
 }

  let a = 10
 if(a >5 ) {
 "use strict"
 console.log(a)
 }

*/

// 1. "use strict" kodda sehvleri tapmaga komek edir

"use strict";

/*

let hasTicket = false;

const paidForTicket = true;

if (paidForTicket) {
  hasTicket = true;
}

if (hasTicket) {
  console.log("I can go to movie");
}

function a() {
  "use strict";
}
*/

// 2. "use strict" bezi rezerv sozlerin deyishen adina verilmesine icaze vermir

// let private = 5;
// console.log(private);

// let interface = 8;
// console.log(interface);

// ************************ ALERT - PROMPT - CONFIRM *************** //

// alert("message") - brauzer-de mesaji modal pencerede gosterir
// brauzerde bezi ishleri bloklayir ve user OK basmadiqca bashqa bir ish gormek olmur
// alert-den sonra gelen komandalar ancaq OK-i basandan sonra ishelyir

/*
alert("Hello");

console.log("My name is Ahmed");


// alert Ne ucun istifade olunur - daha cox xeberdarliq ucun istifade olunur

const myName = "Samed";

//  alert(`Hello, ${myName}`); // Hello Samed

// alert("This website is not secure");

alert("10 minutes left to the end of exam"); 


// const password = "myEtc";

// const password = "$ETBDTBCVkdnflfj";

if (password !== "$ETBDTBCVkdnflfj") {
  alert("Password is not correct");
} 
*/

// PROMPT
/*
// prompt("message" , default)

// Istifadeciden melumat almaq ucun istifade olunur

prompt("What is your first name?");

let firstName = prompt("What is your first name?");

// console.log(firstName);

// alert(`Hello, ${firstName}`);

// prompt-a cancel verende firstName = null olur

// Ancaq null-u nezere alir
if (firstName === null) {
  alert("You did not write your name");
} else {
  alert(`Hello, ${firstName}`);
}

// Hem null-u hem de bosh setri nezere aliram
if (firstName === null || firstName === "") {
  alert("You did not write your name");
} else {
  alert(`Hello, ${firstName}`);
}
*/
/*
let firstName = prompt("What is your name?", "Anonymous");

// alert(`Hello, ${firstName}`);

if (firstName === null) {
  alert("You did not write your name");
} else {
  alert(`Hello, ${firstName}`);
}

let country = prompt("Where are you from?", "Azerbaijan");

if (country === null) {
  alert("You did not write name of the country");
} else {
  alert(`You are from ${country}`);
} 

// *************************** CONFIRM ******************** //

// confirm - istifadeciden sual sorushub - ya true ya da false cavabi almalidir.

// confirm("Do you have a car?");

let answer = confirm("Do you have a foreign passport?");

// Ok = true Cancel = false

console.log(answer);

if (answer) {
  alert("You can go to a foreign country");
} else {
  alert("You cannot go to a foreign country");
} */

// ************************** SHORT CIRCUITING - OR AND ***********************
// ||

// let busCardBalance = 0.2;
// let cardBalance = 1;

// if (busCardBalance >= 0.5 || cardBalance >= 0.5) {
//   console.log("I can get on a bus");
// }

// Falsy value-lar
// false, 0, "", null, undefined, NaN

// qalanlari truthy value-lardir

console.log(5 || false);

console.log(false || 12);
// || (OR) nece ishleyir
/*
1. Operandlari soldan sage qiymetlendirir
2. Her birini true ve ya false-a cevirir. Eger netice true-dursa o zaman dayanir ve original
qiymeti qaytarir. Dayandigina gore ona short circuting deyirler
3. Eger yoxlanis zamani hamisi false-dirsa, axiricini qaytarir.*/

// console.log(null || undefined || "hello");

// true ve false Boolean ifadeler

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("hello"));

console.log(null || undefined || "hello"); // hello

console.log(NaN || 0 || 20 || undefined); // 20

console.log(5 || 10); // 5

console.log(null || NaN || -2 || undefined || 0);
