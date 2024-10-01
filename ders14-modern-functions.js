// JS-de function-lar 3 cure yazilir

// 1. Function declaration syntax
/*

function hello() {
  console.log("Hello");
}
console.log(hello);

// hello();

// 2. Function expression syntax

const helloExp = function () {
  console.log("Hello from express");
};

console.log(helloExp);

helloExp();

// 3. Arrow function syntax

// let deyiseni de ishletmek olar

const helloArr = () => {
  console.log("Hello from Arrow");
};

console.log(helloArr);

helloArr();

// Parametrli funksiya

// decl
function byeGuest(name) {
  console.log(`Bye, dear ${name}`);
}

byeGuest("Selim");

// expr

const byeGuestExp = function (name) {
  console.log(`Bye, dear ${name}`);
};

byeGuestExp("Veli");

// arrow

const byeGuestArr = (name) => {
  console.log(`Bye, dear ${name}`);
};

byeGuestArr("Jale");

// Sum funk

// Decl
function sum(a, b) {
  return a + b;
}

// Expr

const sumExp = function (a, b) {
  return a + b;
};

// Arr

const sumArr = (a, b) => {
  return a + b;
};

const result23 = sumArr(2, 3);
console.log(result23);

// Arrow Funk Qisaltmasi - Return olmayanda

// Eger funksiyanın kodu 1 setirden ibaretdirse, {} motez-ni yigisdirmaq olar

// Qisaltma - Return olanda
// Eger funksiyanın kodu 1 setirden ibaretdirse ve orada return varsa, return ve {} motez-ni yigisdirmaq olar

const helloArr2 = () => console.log("Hello from Arrow");

const sumArr2 = (a, b) => a + b; // implicit return

// Qisatlma - eger funksiyanin 1 parametri varsa, () - ni de yigisdirmaq olar

const triple1 = (a) => {
  return a * 3;
};

// prettier-ignore
const triple2 = a => a * 3;

// Qisaltmalarda diqqetli olmaq lazimdir
// Kodun icinde 1 setirden cox yazi olsa, {} - leri yigisdirmaq olmaz
const multiply = (a, b) => {
  let result = a * b;
  return result;
};
*/

// ###################### Funksiyanin icinden basqa funksiyanin cagirilmasi #######

// cookie, bread, pie satiriq - cookiePr = 0.7 breadPr = 0.5, piePr = 1
// gundelik cemi satisi cixartmaq isteyirik
// Alqoritm - ne etmek lazimdir

// 1 bulkanin qiymeti 0.7-dir

const totalSales = (cookie, bread, pie) => {
  let cookieSales = 0.7 * cookie;
  let breadSales = 0.5 * bread;
  let pieSales = 1 * pie;
  let total = cookieSales + breadSales + pieSales;
  return total;
};

console.log(totalSales(10, 20, 30));

// 3 funksiyaya parcaladim

const cookieS = (cookie) => 0.7 * cookie;
const breadS = (bread) => 0.5 * bread;
const pieS = (pie) => 1 * pie;

const totalSales2 = (cookie, bread, pie) => {
  let total = cookieS(cookie) + breadS(bread) + pieS(pie);
  return total;
};

console.log(totalSales2(10, 20, 30));

// 3 funksiyanin evezine 1 funksiya yaziram

const productSales = (price, product) => price * product;

let cookieS2 = productSales(0.7, 10);
console.log(cookieS2);

let breadS2 = productSales(0.5, 20);
console.log(breadS2);

const totalSales3 = (cookie, bread, pie) => {
  let total =
    productSales(0.7, cookie) + productSales(0.5, bread) + productSales(1, pie);
  return total;
};

console.log(totalSales3(10, 20, 30));

const totalSales4 = (cookie, bread, pie) =>
  productSales(0.7, cookie) + productSales(0.5, bread) + productSales(1, pie);

console.log(totalSales4(10, 20, 30));
