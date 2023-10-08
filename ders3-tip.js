let a = 5;
const b = -3;
let abc = 0.2;
let sheher = "Baki"; // "" ``

let fgh = true; //Boolean
let mll = false;
let jkl = "false";

let kitab; // undefined tip
let telefon; // undefined tip
let film = undefined;

let kassa = null;
let vereq = ""; // String

// typeof

console.log(typeof abc);
console.log(typeof vereq);
console.log(typeof "");
console.log(typeof film);
console.log(typeof kitab);
console.log(typeof kassa); // typeof null object gosterir. Bu bir bug-dir.

// Javascript dinamik tiplesdiren proqramdir.

// let string a = "defter" - statik tipde hem deyiseni hem de onun tipini elan edirsen

let klm = "kartof";
klm = 8;
klm = true;
klm = null;
klm = undefined;

let exam = "tarix";
exam = 356;

let yash = "20";
console.log("Evvel", typeof yash);
// console.log(yash);
yash = Number(yash);
console.log("Sonra", typeof yash);
// console.log(yash);
let tlm = false;
tlm = Number(tlm);
console.log(tlm);
let utk = true;
// utk = Number(utk);
utk = +utk;
console.log(utk);
