// Modern Javascript

// Destructuring arrays
/*

const arr = [5, 8, 12];

console.log(arr[0]);

const num1 = arr[0];
const num2 = arr[1];
const num3 = arr[2];

console.log(num1);
console.log(num2);
console.log(num3);

const [x1, x2, x3] = arr;

console.log(x1);
console.log(x2);
console.log(x3);

const teams = ["Real", "Borussia", "Inter", "Chelsea"];

const [teamSp, teamGe, teamIt, teamEn] = teams;

console.log(teamSp, teamGe, teamIt, teamEn);

const cities = ["Madrid", "Paris", "Berlin", "Milan", "Amsterdam"];

const [city1, city2] = cities;
console.log(city1); // Madrid
console.log(city2); // Paris

// city1 = "London"; // const oldugundan error verecek
// console.log(city1);

const phones = ["LG", "Samsung", "Huawei", "Iphone", "Oneplus"];

let [, , phone3, phone4, phone5] = phones;

console.log(phone3);
console.log(phone4);
console.log(phone5);

phone3 = "Sony";
console.log(phone3); // ancaq phone3-u deyishir, amma array-e tesir etmir.
console.log(phones);

let [phoneLG, phoneSam, , , phoneOne] = phones;
console.log(phoneLG);
console.log(phoneSam);
console.log(phoneOne);

// Destructuring objects

const country = {
  name: "Germany",
  capital: "Berlin",
  population: 80,
};

console.log(country.name);
console.log(country["capital"]);
console.log(country.population);

// Adi qayda
let countName = country.name;
let countCap = country.capital;
let countryPop = country.population;

console.log(countName);
console.log(countCap);
console.log(countryPop);

// Yeni qayda

const { name, capital, population } = country;

console.log(name);
console.log(capital);
console.log(population);

const car = {
  make: "Mercedes",
  model: "S320",
  year: 2018,
};

const { make, model, year } = car;

console.log(make);
console.log(model);
console.log(year);

// Objectt destructuring ferri
// 1. Siralama shert deyil

const team = {
  countryT: "Spain",
  nameT: "Real Madrid",
  champions: 30,
};

let { nameT, champions, countryT } = team;

console.log(nameT); // nameT = 'Real Madrid'
console.log(champions); // champions = 30 // amma bu team.champions-a beraber deyil
console.log(countryT);

champions = 100; // bu teams-de olan champions-u deyishmir

console.log(champions); // obyekti deyishmir
console.log(team);

// 2. Ayri-ayri deyishenleri secende boshluq buraxmirir

const book = {
  title: "Algebra",
  yearB: 2018,
  pages: 520,
};

let { pages, title } = book;

console.log(pages);
console.log(title);

let { title: bookTitle, yearB: publishYear, pages: pagesCount } = book;

console.log(bookTitle);
console.log(publishYear);
console.log(pagesCount);

const home = {
  town: "Ahmedli",
  street: "Hadi, 25",
  area: 80,
  price: 100000,
};

let { town, street: address, price } = home;

console.log(town);
console.log(address);
console.log(price);

// Spread operator ...

const arr2 = [10, 15, 26, 32];

for (let e of arr2) {
  console.log(e);
}

console.log(...arr2); // 10 15 26 32
console.log(arr2); // [10, 15, 26, 32]

// Spread operator array-in icinden elementleri cixardir

// Element elave olunmasi - kohne usul

arr2.push(6);
console.log(arr2);

// Spread-le elave olunma

const arrNew = [...arr2, 6];
console.log(arrNew); */

// 18-6-24

/*

const arr3 = [4, 8, 9, 11];
arr3.push(7);
console.log(arr3);

const arr4 = [12, 11, 6, -5];

const arr5 = [...arr4, 50]; // spread opearator arr4-u kopyalayir ve sonra ona 50-ni elave edir.

console.log(arr4);
console.log(arr5);

//array-in kopyasina bir nece element elave olunmasi

const arr6 = [...arr4, 20, 30, 11];
console.log(arr6);

// Arrayin kohne ve yeni usulla kopyalanmasi

// Kohne usul

const arr7 = [8, 12, 9, 4];
const arr7Copy1 = arr7.slice();
console.log(arr7Copy1);

// Yeni usul ...spread operator

const arr7Copy2 = [...arr7];
console.log(arr7Copy2);

// Array-lerin birleshdirilmesi

// Kohne usul - concat()

const carsArr1 = ["Mercedes", "BMW", "Audi"];
const carsArr2 = ["Toyota", "Honda"];

const carsCombined = carsArr1.concat(carsArr2);

console.log(carsCombined);

// Yeni usul
const carsCombinedSpr = [...carsArr1, ...carsArr2];
console.log(carsCombinedSpr);

// Spread operatorun funksiya arqumenti kimi

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(2, 4, 6));

// Spread operatoru ile biz Array-i birbasha arqument kimi vere bilirik.

const arr10 = [10, 4, 7];

console.log(sum(arr10)); // duzgun netice vermeyecek

console.log(sum(...arr10)); // biz Array-i ele bil ki kvadrat moterizeleri yigisdidiq

function multiply(a, b) {
  return a * b;
}

console.log(multiply(...arr10)); //40 edir, cunki 10*4 = 40 - amma 7-ni saymir
// Arrayi elementleri ile funksiyadaki parametr sayi eyni olmalidir.

const arr11 = [10, 9];

console.log(multiply(...arr11));

// const elements = ...arr11 // bu yazilis sehvdir

// Obyektlerde spread operator

const capitals1 = {
  Germany: "Berlin",
  France: "Paris",
  Italy: "Rome",
};

// Obyektin kopyasini cixarmaq

const capitals1Copy = { ...capitals1 };

console.log(capitals1Copy);

// Obyektin kopyasina yeni elementler elave etmek

const capitals2 = {
  ...capitals1,
  Spain: "Madrid",
  Poland: "Warsaw",
};

console.log(capitals1); // oldugu kimi qalir
console.log(capitals2); // 2 dene yeni element elave olunur.

// 2 ve ya daha cox obyektin birleshdirilmesi

const carM = {
  make: "BMW",
  motor: 2500,
};

const carY = {
  year: 2019,
  price: 55000,
};

const carMY = { ...carM, ...carY };
console.log(carMY);

// REST operatoru ve onun da isharesi ...

// REST elementleri array ve obyekte-e yigir, Spread array ve obyektleri elementler parcalayir

// REST destrukturazisya ishlenir

// Array-de REST

const arr12 = [15, 14, 17];

const [a1, a2, a3] = arr12;
console.log(a1);
console.log(a2);
console.log(a3);

const [d1, d2, d3, d4] = [12, 10, 20, 45];

console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);

const [b1, b2, b3, ...others] = [10, 15, 20, 14, 30, 16, 18, 20];
console.log(b1);
console.log(b2);
console.log(b3);
console.log(others);

// Eger beraber isharesi varsa ...REST operator = - den solda olur

const teams = ["Real", "Bayer", "Roma", "Milan", "Inter"];

const [spainT, germanT, ...italianT] = teams;

console.log(spainT);
console.log(germanT);
console.log(italianT);

// REST operator axirda olmalidir

const cars = ["Toyota", "Honda", "BMW", "Range Rover", "Hyundai"];
// const [...japanC, germanC, englC, koreaC] = cars // bu sehv verecek

// REST funksiyada

function sum2(arr) {
  let sum = 0;
  for (let e of arr) {
    sum = sum + e;
  }
  return sum;
}

const arr14 = [4, 7, 6];
console.log(sum2(arr14));

// 5, 15, 20, 30, 14, 18, ... 100

function sumR(...numbers) {
  let sum = 0;
  for (let e of numbers) {
    sum = sum + e;
  }
  return sum;
}

console.log(sumR(4, 11, 6, 2, 5));

const arr17 = [8, 12, 5, 6];

console.log(sum2(arr17));

// Butun ededlerin cemini tapan funksiya duzelt

// Ancaq cut ededlerin cemini tapan funksiya duzelt
// 5, 2, 3, 7, 8

// REST obyektlerde = elementlerden obyekt duzeldir

const laptop = {
  country: "USA",
  brand: "HP",
  RAM: "16 GB",
  CPU: "i7 4.4 GHz",
  SSD: "1 TB",
};

const { country, brand, ...laptopSpec } = laptop;
console.log(country);
console.log(brand);
console.log(laptopSpec);

// New object literals

const exam1 = {
  examName: "English",
  examDate: "25-06-2024",
};

let examName = "Algebra";
let examDate = "26-06-2024";

const exam2 = {
  examName: examName, // 1-ci examName - exam2 obyektinin key properti
  examDate: examDate, // 1-ci examDate - exam2 obyektinin key
};

// 2-ci examName - exam2 obyektinin value-sidir, variable-la ifade olunub = 'Algebra'
// 2-ci examDate = exam2 obyektinin value-sidir, variable-la ifade olunub = '26-06-2024'

console.log(exam2);

// Modern usulda bu yazilisi daha da qisaldirlar

const exam3 = {
  examName, // examName: examName
  examDate, // examDate: examDate
};

console.log(exam3);

let productName = "soap";
let productPrice = 2;

const product1 = {
  productName: productName,
  productPrice: productPrice,
};

const product2 = {
  productName,
  productPrice,
};

console.log(product1);
console.log(product2);
*/

// 25-06-2024

/*

const prod = {
  name: "soap", // name - KEY, soap - VALUE
  price: 50, // price - KEY, 50 - VALUE
};

console.log(prod.name); // prod.name = soap
console.log(prod.price); //50 ==> object.key = value

console.log(prod["name"]); // soap
console.log(prod["price"]); // 50

const country1 = {
  name: "Germany",
  capital: "Berlin",
  population: 80,
};

const country2 = {
  name: "France",
  capital: "Paris",
  population: 70,
};

const populationTot = country1.population + country2.population;
console.log(populationTot);

// const populatoinTot = country1.population + country2.population + country3.population
// + ... country50.population

const country4 = {
  name: "Spain",
  capital: "Madrid",
  population: 60,
};

const pop1 = country1.population;
const popSp = country4.population;

const { population } = country4; // const population = country4.population
const { population: popSp2 } = country4; // const popSp2 = country4.population

const { capital: capSp } = country4; // const capSp = country4.capital
// capSp - variable ; popSp2 = variable

// 3.3 Bele bir funksiya var. Bu funksiya ededler ucun nezerde tutulub

function average(a, b, c) {
  return (a + b + c) / 3;
}

// Bu funksiyani spread operatorundan istifade etmekler asagidaki array ucun de ishlet
// yeni funksiyani cagirib neticede 8 almalisan
const arr10 = [12, 15, -3];

//average('a', 'b', 'c') // reqem deyil, ona gore sehv verecek

console.log(average([12, 15, -3])); // NaN - not a number

console.log(arr10); // array
console.log(...arr10); // ededler

console.log(average(...arr10)); // average(12, 15, -3)

// 5.2 Ancaq tek ededlerin cemini tapan funksiya duzelt, adini sumOddNumbers qoy

// Komek ucun array-de bu ishi goren funksiya
function sumOddA(arr) {
  let sum = 0;

  for (let e of arr) {
    if (e % 2 !== 0) {
      sum = sum + e;
    }
  }
  return sum;
}

// console.log(sumOddA(5, 2, 7, 3)); sehv
console.log(sumOddA([5, 2, 7, 3])); // duz olacaq

function sumOddNumbers(...nums) {
  let sum = 0;

  for (let e of nums) {
    if (e % 2 !== 0) {
      sum = sum + e;
    }
  }
  return sum;
}

console.log(sumOddNumbers(5, 2, 7, 3));

// (5, 2, 7, 3) ==> [5, 2, 7, 3]*/

// 2-07-2024

// Obyekt metodlarinin yeni yazilisi

const robot1 = {
  name: "Alutomo",
  company: "Toyota",
  stop: function () {
    console.log("I stopped ");
  },
};

console.log(robot1.stop());

const robot2 = {
  name: "Alutomo",
  company: "Toyota",
  stop() {
    console.log("I stopped ");
  },
};

console.log(robot2.stop());

const product2 = {
  name: "soap",
  price: 2,
  count: 3,
  total: function (a, b) {
    console.log(a * b);
  },
};

console.log(product2.total(2, 3));

const product3 = {
  name: "soap",
  price: 2,
  count: 3,
  total(a, b) {
    console.log(a * b);
  },
};

console.log(product3.total(3, 5));

// Set - Tekrari olmayan elementler coxlugu

//{'Apple', 'Apple'}

const arr20 = [20, 12, 12, 14, 20, 16, 12, 20];

const arr20Set = new Set(arr20);

console.log(arr20Set);

// Set-de siralama yoxdur

// Setin elementlerin array-e cevirmek ucun ...spread operatorundan istifade edirik

// {20, 12, 14, 16}

const arr20Unique = [...arr20Set];

console.log(new Set(["apple", "pear", "apple", "banana", "banana"]));

const arr21 = ["Berlin", "Paris", "Berlin", "Rome", "Paris", "Berlin"];

const arr21Unique = [...new Set(arr21)];
// 1. {Berlin, 'Paris', 'Rome} 2. ['Berlin', 'Paris', 'Rome']
console.log(arr21Unique);

// Obyektlerde loop (for, while)

const car = {
  make: "BMW",
  year: 2018,
  price: 30000,
};

// Object.keys

console.log(Object.keys(car));

const carKeys = Object.keys(car);

console.log(carKeys); // ['make', 'year', 'price']

for (const e of carKeys) {
  console.log(e);
}

// make year price

const cafePrice = {
  breakfast: 5,
  lunch: 7,
  dinner: 10,
};

// qiymetleri * 1.2

// Effektiv olmayan kohne yol

// cafePrice['breakfast'] = 5 * 1.2;
// cafePrice['lunch'] = 7 * 1.2;
// cafePrice['dinner'] = 10 * 1.2;

// console.log(cafePrice);

const cafePriceKeys = Object.keys(cafePrice);

//
