// Loops
// Tutalim mene lazimdir 1-den 30-a qeder ededleri console-a verim.

// console.log(1, 2, 3, 4, 5, "...");

// for, while, do while

// for moterizenin icinde 3 hisse olur ve ; ile ayrilir
// 1-ci hisse neceden baslayiriq
//2-ci hisse dayanma noqtesi, shert yazilir
//3-cu hisse increment - artan hisse - addim

// for (let i = 1; i <= 30; i++) {
//   console.log(i);
// }

// Bunu yeniden de

//1-ci addim i=1 olur, yoxlanir 30-dan kicik beraber olmagi,
// blokun icinde kod icra olunur konsole-a 1 verilir
// i 1 eded artilir olur2

// 2-ci addimda i=2 olur, yoxlanir 30-dan kicik beraber olmagi,
// konsol-a i=2 verilir
// i olur 3

// son addimdan evvelki
// i = 30 olur, 30 = 30 olduguna gore console-a 30 verilir
// i = 31

// son addim i=31 olur 31-den 30 boyuk olduguna gore proqram dayanir

// console.log(1); console.log(2) .... console.log(30)

// for loop-un icinde elan olunan deyishen (variable) for-dan kenarda yoxdur.
// Bu, let-le elan olunan deyishenlere aiddir

// for (let num = 1; num <= 5; num++) {
//   console.log(num);
// }

// console.log(num);

// let a;
// console.log(a);

// for (a = 1; a <= 4; a++) {
//   console.log(a);
// }

// 1. addim a=1, 1 <=4 duz olduguna gore,
// 1. addimin davami konsol-a 1 verilir, a 1 vahid artirilir a = 2 olur

// 2. addim a=2, 2 <=4 duz olduguna gore
// 2. addimin davami  konsol-a 2 verilir, a 1 vahid artilir a = 3

// 3. addim a=3, 3<=4 duz olduguna gore
// 3. addimin davami konsol-a 3 verilir, a 1 vahid artilir a = 4

// 4. addim a=4, 4<=4 olduguna gore
// 4. addimin davami konsola 4 verilir, a 1 vahid artilir a = 5

// 5. addim a=5, 5<=4 olmadigina gore proqram dayanir
// Amma a=5 olaraq yaddasda qalir

// axirinci addimda a = 5 olur, ona gore asagida 5 cixacaq

// console.log(a);

// Azalan loop

// for (let b = 5; b >= 1; b--) {
//   console.log(b);
// }

// Bir nece vahid artirib azaltmaq

// for (let c = 10; c >= 1; c = c - 2) {
//   console.log(c);
// }

// b++ =>  b = b + 1;  a-- => a = a - 1

// for ( let c = 10; c >= 1; c - 2) - Bu duzgun yazilis deyil

// for (let d = 2; d <= 10; d = d + 3) {
//   console.log(d);
// }

// d = d +3 ==> d += 3
// c = c - 2 ==> c -= 2

// 1-den 10-a qeder tek ededleri konsol-a cixart

// for (let i = 1; i <= 10; i = i + 2) {
//   console.log(i);
// }

// 1-den 10-a qeder cut ededleri konsol-a cixart

// for (let e = 2; e <= 10; e = e + 2) {
//   console.log(e);
// }

// Daha duzgun yanashma

// tek ededler

// //
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//cut ededler

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let a = 5

// let a = 10

//  ###################### break statement  #######################

// break kod-un icrasini dayandirir

// for (let i = 1; i <= 10; i++) {
//   break; // proqram konsol-a hech bir eded vermir ve dayanir
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i > 7) {
//     break;
//   }

//   console.log(i);
// }

// ######################### continue ##########################

// continue proqrami dayandirmir, ancaq bir hisseni icra elemir

// 1-den 15-e qeder ededlrin uzerine 2 gel, amma ekrana 13-u verme
// for (let i = 1; i <= 15; i = i + 2) {
//   if (i === 13) {
//     continue;
//   }
//   console.log(i);
// }

// 2-den 20-ye qeder ededlerin uzerine 2 gel
// amma 12 ve 16 arasinda olanlari ekrana verme

// for (let i = 2; i <= 20; i = i + 2) {
//   if (i >= 12 && i <= 16) {
//     continue;
//   }
//   console.log(i);
// }

// 2-den 20-ye qeder ededlerin uzerine 2 gel
// amma 8 ve 18-i ekrana verme

// for (let i = 2; i <= 20; i = i + 2) {
//   if (i === 8 || i === 16) {
//     continue;
//   }
//   console.log(i);
// }

// ########################### While ############################

// for (let a = 1; a <= 4; a++) {
//   console.log(a);
// }

// While
// let a = 1;

// while (a <= 4) {
//   console.log(a);
//   a++;
// }

// for (let d = 2; d <= 10; d = d + 3) {
//   console.log(d);
// }

// while
// let d = 2;
// while (d <= 10) {
//   console.log(d);
//   d = d + 3;
// }

//################################# Do while

// let i = 2;
// do {
//   console.log(i);
//   i = i + 3;
// } while (i <= 10);

// ################################ 29-4-24 ##################################

// 1-den 5-e qeder olan ededlerin cemlenmesi

// 1 + 2 + 3 + 4 +5 + .. 100
// sum = 0
// sum = 0+1
// sum = 1 + 2
// sum = 1 + 2 + 3

// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// console.log(1 + 2 + 3 + 4 + 5);

// 1-den 4-e kimi ededlerin vurulmasi

// result = 1
// result = 1 * 1
// result = 1 * 2 ...
// let result = 1;

// for (let i = 1; i <= 4; i++) {
//   result = result * i;
// }

// console.log(result);

// console.log(1 * 2 * 3 * 4);

// for (let i = 1; i <= 4; i++) {
//   let result2 = 1; // yanlis
//   result2 = result2 * i;
// }

// console.log(result2); // yanlis

// 1-den 10-a qeder cut ededlerin toplanmasi

// let sum2 = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     sum2 = sum2 + i;
//   }
// }
// console.log(sum2);
// console.log(2 + 4 + 6 + 8 + 10);

// For-un Funksiya shekline salinmasi

// function oneTo30() {
//   for (let i = 1; i <= 30; i++) {
//     console.log(i);
//   }
// }

// oneTo30();

// 1-den istenilen edede qeder olan ededleri konsol-a cixardin

// function oneToN(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }

// oneToN(5);

// 1-den istenilen edede qeder olan cut ededleri konsol-a cixardin

// function oneToEven(m) {
//   for (let i = 1; i <= m; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// oneToEven(8);

// 1-den istenilen edede qeder ededlerin cemini hesablayin

// Funksiyada parametr olanda iceride o ishlenmelidir
// Asagidaki funksiyada parametr ishlenmir ona gore o duzgun netice vermir

// function sumOneToN(n) {
//   let sum = 0;

//   for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
//   }

//   return sum;
// }

// let sumOneTo5 = sumOneToN(5);

// console.log(sumOneTo5);

// let sumOneTo3 = sumOneToN(3);
// console.log(sumOneTo3);

// function sumOneToN(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum = sum + i;
//   }

//   return sum;
// }

// let sum6 = sumOneToN(6);

// console.log(sum6);

// 1-den istenilen edede qeder cut ededlerin toplanmasi funksiyasi

// function sumEven(k) {
//   let sum2 = 0;

//   for (let i = 1; i <= k; i++) {
//     if (i % 2 === 0) {
//       sum2 = sum2 + i;
//     }
//   }
//   return sum2;
// }

// let sumE10 = sumEven(10);

// console.log(sumE10);

// let sumE6 = sumEven(6);
// console.log(sumE6);

// ###################### Loop-larin Array-lerde ishlenmesi ####################

const arr = [2, 7, 15, 3, -5];

// for (let i = 0; i <= ?; i++)

// console.log(arr[0]); //2
// console.log(arr[1]); // 7
// console.log(arr[2]); // 15
// console.log(arr[3]); // 3
// console.log(arr[4]); // -5

// for (let i = 0; i < 5; i++) {
//   console.log(arr[i]);
// }

// Yuxaridaki yanasma qeyri-pesekar yanashmadir/
// Proqram ozu array-in elementlerini sayini goturmelidir

// length

// const arrX = [5, 12, 1, -15, 5, 8, 12];
// console.log(arrX.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Array-in elementlerinin cemini tapmaq

const arr2 = [4, 7, 3];
let sumArr = 0;

// for (let i = 0; i < arr2.length; i++) {
//   sumArr = sumArr + i; // yanlidsidr, cunki i indexksdir
// }

// i - index

for (let i = 0; i < arr2.length; i++) {
  sumArr = sumArr + arr2[i]; // yanlidsidr, cunki i indexksdir
}

// i = 0; arr2[0] = 4
// i =1; arr2[1] = 7
// i =2; arr2[2] = 3

console.log(sumArr);

const arr3 = [12, 7, 8, 2, 4, 9];

// Array-de olan ancaq tek ededleri consol-a ver

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 !== 0) {
    console.log(arr3[i]);
  }
}

// Array-de olan cut ededlerin cemini tapin

let sumArrEven = 0;

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    sumArrEven = sumArrEven + arr3[i];
  }
}

console.log(sumArrEven);
