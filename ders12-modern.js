// Modern Javascript

// Destructuring arrays

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
console.log(arrNew);
