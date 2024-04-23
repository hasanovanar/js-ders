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
let d = 2;
while (d <= 10) {
  console.log(d);
  d = d + 3;
}

//################################# Do while

let i = 2;
do {
  console.log(i);
  i = i + 3;
} while (i <= 10);
