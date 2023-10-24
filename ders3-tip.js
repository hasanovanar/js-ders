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

// Dersin 2-ci hissesi
let abcd = "5";
abcd = parseInt(abcd);
console.log(typeof abcd);

let feg = "1.2";
feg = parseInt(feg);
console.log(feg);

// parseInt - String formatinda olan tam ededleri Number formatina cevirir.
// parseFloat - String formatinda olan onluq kesr ededleri Number formatina cevirir.

let tml = "2.5";
tml = parseFloat(tml);
console.log(tml);
console.log(typeof tml);

let zxy = "3.5";
zxy = Number(zxy);
console.log(zxy);

let pth = true;
pth = Number(true);
console.log(pth);

let ytgk = false;
ytgk = Number(ytgk);
console.log(ytgk);

let ktg = null;
ktg = Number(ktg);
console.log(ktg);

let utg = undefined;
utg = Number(utg);
console.log(utg); // NaN - not a number

// String formatina cevrilis

let jtlm = 12;
jtlm = String(jtlm);
console.log(typeof jtlm);

let ugnm = 20;
ugnm = ugnm.toString();
console.log(typeof ugnm);
console.log(ugnm);

let tyg = true;
tyg = String(tyg);
console.log(tyg); // eslinde 'true'
console.log(typeof tyg);

let opx = true;
console.log(typeof opx);
console.log(opx);

opx = String(opx);
console.log(opx);

let dogru = true;
let ngh = dogru + 5;
console.log(ngh);

let jtkl = true + 5;
console.log(jtkl);

let thy = "true" + 5; // true + '5'
console.log(thy);

let bgt = true; // boolean tipi;
console.log(bgt + 2); // 3 olmalidir, cunki true cevrilir 1-e

bgt = String(bgt);
console.log(typeof bgt);
console.log(bgt);
console.log(bgt + 2); // true2, cunki true cevrilir 'true'-ya sonra '2' ile birleshir

let mnk = false;
console.log(mnk + 4); // 4 olmalidir, cunki false cevrilir 0-a

mnk = String(mnk);
console.log(typeof mnk);
console.log(mnk + 4); // false4, cuni false cevrilir 'false'-a sonra '4' ile birlesir.

let pkh = null;
pkh = String(pkh);
console.log(pkh);

let ptg = undefined;
ptg = String(ptg);
console.log(ptg);
console.log(typeof ptg);

// Boolean-a cevrilis
let bnj = 5;
bnj = Boolean(bnj);
console.log(bnj);

let tgk = 0;
tgk = Boolean(tgk);
console.log(tgk); // 0 false-a cevrilir, qalan butun reqemler true olur.

let pkg = "false";
pkg = Boolean(pkg);
console.log(pkg);
