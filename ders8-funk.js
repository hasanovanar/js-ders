// Funksiyalar

// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");
// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");
// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");
// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");
// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");

// Funksiyanin yaradilmasi 2 merheleden ibaretdir
// 1-ci onu elan edirik
//2-ci onu cagiririq

//1-ci merhele - elan etmek - declaration
// moterizenin icinde hechne yoxdursa, bu parametrsiz funksiyadir

/*
function salam() {
  // function body - burda kod yazilir
  console.log("Salam, hormetli qonaq,  otelimize xosh gelmisiniz!");
}

//2-ci merhele - cagirmaq - call, invocation
salam();
salam();

function shexsVesiqe() {
  console.log("Ad: Semed");
  console.log("Familiya: Veliyev");
  console.log("Unvan: Baki seh. A.Rajabli kuc, 38");
  console.log("Dogum tarixi: 12.03.1987");
}

shexsVesiqe();

shexsVesiqe();

// Moterizenin icinde deyisen yazanda buna parameter

function salamQonaq(qonaq) {
  console.log("Salam, hormetli qonaq");
}

salamQonaq();

// MEn ne isteyirem
// salamQonaq('Veli') ==> Salam, hormetli Veli
// salamQonaq('Ehmed') ==> Salam, hormetli Ehmed
// salamQonaq('Leyla') ==> Salam, hormetli Leyla

function salamVeli() {
  console.log("Salam, hormetli Veli.");
}

function salamEhmed() {
  console.log("Salam, hormetli Ehmed.");
}

function salamLeyla() {
  console.log("Salam, hormetli Leyla.");
}

salamVeli();

function salamQonaq(qonaq) {
  console.log(`Salam, hormetli ${qonaq}.`);
}

salamQonaq("Ehmed"); // funksiya cagirilanda moterizenin icine yazilana arqument deyilir

salamQonaq("Faiq");

salamQonaq("heyva");

function helloGuest(name) {
  console.log(`Hello, dear ${name}`);
}

helloGuest("John"); */

// 1-4-24 ders

function introduce(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old `);
}

introduce("Ehmed", 30);

// console.log("Familiya: Veliyev");
// console.log("Unvan: Baki seh. A.Rajabli kuc, 38");
// console.log("Dogum tarixi: 12.03.1987");

function idCard(name, surname, address, birthPlace) {
  console.log(`Name: ${name}`);
  console.log(`Surname: ${surname}`);
  console.log(`Address: ${address}`);
  console.log(`Birthplace: ${birthPlace}`);
}

idCard("Samed", "Veliyev", "Yasamal 35", "Baku");

// literalsiz yazmaq
function introduce2(name, age) {
  console.log("Hello, my name is " + name + " and I am " + age + " years old ");
}

introduce2("Hasan", 40);

function hello() {
  let text = "Hello";
  console.log(text);
}

hello();

let welcome = "Hello";
function hello2() {
  console.log(welcome);
}

hello2();

function byeGuest(name) {
  console.log(`Goodbye, dear ${name}`);
}

byeGuest("Faig");

let guest = "Yashar";
byeGuest(guest);

const surname = "Teymurov";
byeGuest(surname);

byeGuest("Ali");

let goodbyeAli = byeGuest("Ali");

console.log(goodbyeAli);

function byeGuest2(name) {
  console.log(`Goodbye, dear ${name}`);
}

let goodbyeVeli = byeGuest2("Veli"); // burda funksiya cagirilir ve icra olunur ve
// netice deyishene verilir

let textBye = "Goodbye, Ahmed";
console.log(textBye);

console.log(goodbyeVeli); // netic undefined verdi

// Niye yuxaridaki undefined verdi

// Sohbet funksiyanin icindeki console.log texmini bosh bir soze beraberdir ona gore onu
// deyishene verende o undefined olur

// return - real netice

function byeReturn(name) {
  return `Goodbye, dear ${name}`;
}

byeReturn("Elshan"); // cagiranda bu funksiya icra olunur ve o netice veir
// amma biz o neticeni gormuruk

let show = byeReturn("Elshan"); // show olur ele Goodbye, dear Elshan olur
console.log(show);

function sum(a, b) {
  let result = a + b;
  return result;
}

sum(3, 4);

let showSum = sum(3, 4);
console.log(showSum);

console.log(sum(3, 4));

function sum2(a, b) {
  return a + b;
}

let showSum2 = sum2(15, 20);
console.log(showSum2);

function subtract(a, b) {
  return a - b;
}

console.log(subtract(12, 24));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 10));

function square(a) {
  return a ** 2;
}

console.log(square(4));

function squareSum(a, b) {
  return a ** 2 + 2 * a * b + b ** 2;
}

// (a + b)^ 2

console.log(squareSum(2, 3));

// Funksiyada return-den sonra hech bir kod icra olunmur

function kub(a) {
  return a ** 3;
  console.log("Hello Veli");
  let b = 355;
  console.log("Goodbye");
}

console.log(kub(3));

function test() {
  let a = 5;
  return;
  console.log(a);
}

console.log(test());
