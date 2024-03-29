// IF - ELSE

// if-den sonraki moterizenin icinde shert dogru olsa - value truthy
// o zaman sistem moterizenin icinde olan her bir sey
// icra olunur

if (true) {
  console.log("Bu gun noyabrin 15-dir");
}
// Asagidaki kodda shert false oldugundan console.log()
// icra olunmur

if (false) {
  console.log("Bu gun dekabrin 3-dur");
}

// Falsy valuelar undefined, null, '', NaN

const bal = 150;

// if (bal >= 300) {
//   console.log("Telebe imtahandan kecir");
// }

// if (bal < 300) {
//   console.log("Telebe imtahandan kesildi");
// }

// Yuxaridaki sertlerin bir yazilmasi

// if (bal >= 300) {
//   console.log("Telebe imtahandan kecir");
// } else {
//   console.log("Telebe imtahandan kesildi");
// }

// const bal2 = 350;

// if (bal2 >= 300) {
//   console.log("Telebe imtahandan kecir");
// } else {
//   console.log("Telebe imtahandan kesildi");
// }

// 14-1-2024 if-else-davami.

// Ededin tek ve ya cut olmasi.
/*

const eded = 22;

if (eded % 2 === 0) {
  console.log(`${eded} cut ededdir`);
} else {
  console.log(`${eded} tek ededdir`);
}

// console.log(15 % 2);

// Eyni kodun diger yazilis usulus

if (eded % 2 !== 0) {
  console.log(`${eded} tek ededdir`);
} else {
  console.log(`${eded} cut ededdir`);
}

// Massivde elementin olub-olmamasi
const grupB = ["Real", "Milan", "Ajax", "PSG"];

if (grupB.includes("Ajax")) {
  console.log("Ajax grupB-ye daxildir");
} else {
  console.log("Ajax grupB-ye daxil deyil");
}

// Yuxaridaki kodun diger yazilis usulu

const kom = "Bayer";

if (grupB.includes(kom)) {
  console.log(`${kom} grupB-ye daxildir`);
} else {
  console.log(`${kom} grupB-ye daxil deyil`);
}

// Eger sen 600-den cox bal yigsan sene verilen teqaudu 100
// Eger  501-600 araliginda yigsan 70
// Eger 501-den asagi yigsan 30

const imtBal = 580;

if (imtBal > 600) {
  console.log("Teqaud 100 manat olacaq");
} else if (imtBal > 500) {
  console.log("Teqaud 70 manat olacaq");
} else {
  console.log("Teqaud 30 manat olacaq");
}

// Yuxaridaki kodu baslayiram kicikden yaziram.
const imtBal2 = 520;

if (imtBal2 <= 500) {
  console.log("Teqaud 30 manat olacaq");
} else if (imtBal2 <= 600) {
  console.log("Teqaud 70 manat olacaq");
} else {
  console.log("Teqaud 100 manat olacaq");
}

// Yeni bir sert elave edirik
// Eger bal 300-500 arasindadirsa onda teqaud 30 man
// Diger hallarda telebe qebul olmayib

const imtBal3 = 180;

if (imtBal3 > 600) {
  console.log("Teqaud 100 manat olacaq");
} else if (imtBal3 > 500) {
  console.log("Teqaud 70 manat olacaq");
} else if (imtBal3 > 300) {
  console.log("Teqaud 30 manat olacaq");
} else {
  console.log("Abutiruyent qebul olmayib");
}

// Yaris 1-ci yere 3500 man, 2ci yere 2000 man, 3-cu yere 1000 qalanlarina ise pul dusmur

const yer = 3;

if (yer === 1) {
  console.log("Sen 3500 man qazandin");
} else if (yer === 2) {
  console.log("Sen 2000 man qazandin");
} else if (yer === 3) {
  console.log("Sen 1000 man qazandin");
} else {
  console.log("Sen hec ne qazanmadin");
} 
*/

// 21-yanvar-2024

// Math.random() ===> 0 ve 1 arasinda onluq kesr hesablayir ve bu her defe deyishir

// console.log(Math.random());

// 1 ve 6 arasinda ededi almaq ucun 1-ci addim Math.random() * 6

// console.log(Math.random() * 6);

// Math.floor() ededi asagi tam edede qeder yuvarlaqlasdirir/ Mes 10.82 => 10, 9.85467 => 9
// console.log(Math.floor(5.984));

// Math.floor() - biz ala bilirik ancaq 0-dan 5-e qeder aliriq.

// console.log(Math.floor(Math.random() * 6)); // bu bize verir 0, 1, 2, 3, 4, 5

// Bir funk var - onun neticesi verir bize 0, 1, 2, 3, 4, 5
// Bize lazimdir 1, 2, 3, 4, 5, 6

// console.log(Math.floor(Math.random() * 6) + 1);
/*
const zer = Math.floor(Math.random() * 6) + 1;

console.log(`Atilan zer ${zer}`);

if (zer === 6) {
  console.log("Hediyye soyuducu");
} else if (zer === 5) {
  console.log("Hediyye paltaryuyan");
} else if (zer === 4) {
  console.log("Hediyye tozsoran");
} else {
  console.log("Hediyye dushmur");
}

const xaricPasp = true;
const ticket = false;

console.log(xaricPasp && ticket);

if (xaricPasp && ticket) {
  console.log("Sen ucha bilersen");
} else {
  console.log("Sen ucha bilmezsen");
}

const money = true;
const kart = false;

if (money || kart) {
  console.log("Sen odeye bilersen");
} else {
  console.log("Sen odeye bilmirsen");
}
*/

// 4 Fevral 2024
// Mesele shampun satilir 2 deneden cox alana ve bonus kartinda 200-den cox olana
// 40 faiz endirim
// shampunQiy = 7 man

const shampunSay = 2;
const bonusKard = 380;
const shampunQiy = 7;

// 40 faiz endirim === qiymet * 0.6

if (shampunSay > 2 && bonusKard > 200) {
  console.log(`Odenilsei mebleg: ${shampunSay * shampunQiy * 0.6}`);
} else {
  console.log(`Odenilesi mebleg: ${shampunSay * shampunQiy}`);
}

// Mesele shampun satilir 3 deneden cox alana yaxud kartinda 400-den cox bonus
// olana 50 faiz endirim

const shampunSay2 = 5;
const bonus2 = 350;
const shampunQiymet2 = 7;

if (shampunSay2 > 3 || bonus2 > 400) {
  console.log(`Odenilesi mebleg: ${shampunSay2 * shampunQiymet2 * 0.5}`);
} else {
  console.log(`Odenilesi mebleg: ${shampunSay2 * shampunQiymet2}`);
}
