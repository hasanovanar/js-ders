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

/*

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

console.log(test()); */

// 8-4-2024

// let number = 10;

function oddEven(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

oddEven(7);

oddEven(6);

// default parameter

function perim3(a, b, c) {
  return a + b + c;
}

const tri1 = perim3(4, 2, 5);

console.log(tri1);

const tri2 = perim3(4, 2);

console.log(tri2);

// NaN - not a number

// Funksiyaya duzgun sayda parametr vermeyende onu undefined sayir
// 4 + 2 + undefined = NaN

function perimDef(a, b, c = 5) {
  return a + b + c;
}

const tri3 = perimDef(4, 7);

console.log(tri3); // 4 + 7 + 5

const tri4 = perimDef(4, 7, 8);

console.log(tri4);

// Neyi etmek olmaz
// duzgun deyil
function perimDef(a, b = 5, c) {
  return a + b + c;
}

// const tri5 = perimDef(2, , 3) // xeta verecek
const tri6 = perimDef(2, 3); // bunun neticesi NaN olacaq - a = 2, b =3, c = undefined

console.log(tri6);

// duzgun yazilis

function perimDef2(a, c, b = 5) {
  return a + b + c;
}

// 2 parametr default edirem

function perimDefault(a, b = 3, c = 4) {
  return a + b + c;
}

const tri7 = perimDefault(6);

console.log(tri7);

function perimDefault2(a = 7, b = 5, c = 8) {
  return a + b + c;
}

const tri8 = perimDefault2();

console.log(tri8);

// Telebenin balina uygun teqaud funksiyasi

function stipend(score) {
  if (score > 600) {
    console.log("Stipend will be 100 manat");
  } else if (score > 500) {
    console.log("Stipend will be 70 manat");
  } else if (score > 300) {
    console.log("Stipend will be 50 manat");
  } else {
    console.log("Student did not pass");
  }
}

stipend(650);

stipend(350);

function travel(passport, ticket) {
  if (passport && ticket) {
    console.log("You can travel");
  } else {
    console.log("You cannot travel");
  }
}

travel(true, false);

travel(false, false);

travel(true, true);

function idAge(age) {
  return age >= 16 // shert - condition
    ? console.log("You can have ID card") // shert dogru olsa
    : console.log("You cannot have ID card"); // shert dogru olmasa
}

idAge(20);

idAge(12);

// 40 faiz endirim === qiymet * 0.6

function bonus(shampooNum, bonusCard, shampooPrice) {
  if (shampooNum > 2 && bonusCard > 200) {
    console.log(`You have to pay: ${shampooNum * shampooPrice * 0.6}`);
  } else {
    console.log(`You have to pay: ${shampooNum * shampooPrice}`);
  }
}

bonus(3, 250, 5);

bonus(2, 220, 5);

function dice() {
  const dice = Math.floor(Math.random() * 6) + 1;

  console.log(`Dice: ${dice}`);

  switch (dice) {
    case 6:
      console.log("You win a refrigerator");
      break;
    case 5:
      console.log("You win a washing machined");
      break;
    case 4:
      console.log("You win a vacuum cleaner");
      break;
    default:
      console.log("You win nothing");
  }
}

dice();

dice();

// Javascriptde funksiyalar 3 cur yaranir
// Bizim indiye kimi kecdiyimiz funksiyalar Function declaration vasitesidir

// Function expression

function perimRect(a, b) {
  return (a + b) * 2;
}

const rect1 = perimRect(4, 3);
console.log(rect1);

// Bunu cevirecem function expression kimi

const perimExpr = function (a, b) {
  return (a + b) * 2;
};

// Function expression = anonym function

console.log(perimExpr(5, 4));

function howAreYou() {
  console.log("How are you?");
}

howAreYou();

const howAreYouEx = function () {
  console.log("How are you?");
};

howAreYouEx();

// Objects = reference type

const car = {
  brand: "Porsche", // key-value pairs
}; // Object literal usulu

console.log(car);

const carPorsche = {
  brand: "Porsche",
  model: "Panamera",
  year: 2018,
  price: 80000,
  color: "black",
};

console.log(carPorsche);

// model: 'Panamera' ==> model - property

const home = {
  region: "Yasamal",
  floor: 5,
  price: 150000,
  "has Kupca": true,
};

console.log(home);

// Property-ye baxmagin 2 usulu var
// dot notation, bracket notation

console.log(home.region);

console.log(home.price);

const homeFloor = home.floor;
console.log(homeFloor);

console.log(home["region"]);

console.log(home["price"]);

const person = {
  firstName: "Samed",
  lastName: "Veliyev",
  birthYear: 1987,
  isMarried: true,
};

// Object property-lereinin deyismesi
person.isMarried = false;

console.log(person);

person.address = "Baku, Ahmedli 35";

console.log(person);

delete person.address;
console.log(person);

person.hasChildren = true;

console.log(person);
