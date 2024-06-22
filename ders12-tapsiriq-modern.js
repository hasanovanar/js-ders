// 1. Asagidaki array-leri destructure et.

// 1.1 Deyishenler(variable) european, asian, african (yeni european = 'Germany', asian = 'Japan'
//african = 'Egypt)
const countries = ["Germany", "Japan", "Egypt"];

// 1.2. Ancaq bread və butter ==> product1 və product2 dəyişənlərinə
// product1 = 'bread' product2 = 'butter'

const products = ["bread", "butter", "rice", "coffee"];

// 1.3. Ancaq Toyota ve Honda ==> carJapan1 = 'Toyota', carJapan2 = 'Honda'
const cars = ["Hyundai", "Kia", "Toyota", "Honda"];

// 1.4. Ancaq 2 ve 4 ==> even1 = 2, even2 = 4
const numbers = [1, 2, 3, 4, 5];

// ################################## Destructuring objects #########################

// 2. Asagidaki obyekt-leri destructure et.

// 2.1. name, team ve age deyisenlerini

const player = {
  name: "Wirtz",
  team: "Bayer 04",
  age: 21,
};

// 2.2. Ancaq brand ve price deyisenlerini
const mobile = {
  brand: "Samsung",
  model: "Galaxy S50",
  price: 2500,
};

// 2.3. Ancaq name ve year ==> name-i title-a, year: releaseDate - a deyish.

const movie = {
  name: "Crashbox",
  genre: "Animation",
  year: 1999,
  country: "Canada",
};

// ################################## Spread - Array ###################################

// 3. Asagidaki array-lerde spread operatordan istifade et.

// 3.1 Asagidaki array-i kopyalayib sonuna 14 ve 35 elave et.

const arr1 = [10, 20, 25, -2];

// 3.2 Asagidaki 3 array-i birleshdir

const arrA = ["Berlin", "Paris"];
const arrB = ["Milan", "Warsaw"];
const arrC = ["Madrid", "Sofia"];

// 3.3 Bele bir funksiya var. Bu funksiya ededler ucun nezerde tutulub

function average(a, b, c) {
  return (a + b + c) / 3;
}

// Bu funksiyani spread operatorundan istifade etmekler asagidaki array ucun de ishlet
// yeni funksiyani cagirib neticede 8 almalisan
const arr10 = [12, 15, -3];

// ################################## Spread - Objects ###################################

// 4. Ashagidaki obyetlerde spread-den istifade et.

// 4.1 Ashagidaki obyekti kopyala ve sonuna elave et
// {screen: 42, price: 2000}

const TV = {
  brand: "Sony",
  model: "S325",
};

// Yekunda bu alinmalidir
const TV2 = {
  brand: "Sony",
  model: "S325",
  screen: 42,
  price: 2000,
};

// 4.2 Ashagidaki 2 obyekti birleshdir.

const camera1 = {
  brand: "Canon",
  model: "EOS5",
};

const camera2 = {
  type: "SLR",
  price: 350,
};

// ################################## REST operatoru ###################################

// 5 Asagidaki tapsiqirlarda REST ishlet

// 5.1 Asagidaki array-den monthW = 'January', monthSpr = 'March' ve
// monthsSummer = ['June', 'July', 'August'] deyishelerini cixart

const months = ["January", "March", "June", "July", "August"];

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

// yoxlanis ucun console.log(sumOddNumbers(3, 2, 4, 5, 7)) = 15
// console.log(sumOddNumbers(6, 11, 8 , 2, 9)) = 20

// 5.3 Ancaq menfi ededleri bir-birine vuran funksiya duzelt adini multiplyNegNum qoy.
// Komekci funksiyani yazmiram ozun duzelt.
