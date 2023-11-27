// Massiv - Array
/*
const erzaq1 = "corek";
const erzaq2 = "yag";
const erzaq3 = "konfet";

const siyahi = ["corek", "yag", "konfet"];

const reqemler = [15, 25, 68, 55];

const qarisiq = [35, "tarix", true, null];

const almaniya = ["Berlin", 80, 1237];

const meyveler = ["alma", "heyva", "armud", "banan"];

console.log(meyveler);

console.log(meyveler[1]);

let meyve3 = meyveler[2];
console.log(meyve3);

let meyve4 = meyveler[3];
console.log(meyve4);

console.log(meyveler[0]);

// Massivin yaradilmasinin 2-ci usulu
const kitablar = new Array("tarix", "felsefe", "cografiya");

console.log(kitablar);

const imtahanlar = ["kimya", "riyaziyyat", "edebiyyat", "tarix"];

console.log(imtahanlar);

imtahanlar[3] = "fizika";

console.log(imtahanlar);

imtahanlar[0] = "cografiya";

console.log(imtahanlar);

// Massivin elementlerinin sayi  .length - property = xususiyyet

console.log(imtahanlar.length);

// Massivin metodlari  Metod - funskiyadir

const fruits = ["alma", "kivi", "banan", "armud"];

console.log(fruits);

// push() Massivin sonuna element elave edir

fruits.push("gilas");

console.log(fruits);

const qiymetler = [12, 35, 75, 48];

qiymetler.push(43);

console.log(qiymetler);

// pop() massivin sonundan elementi silir

fruits.pop();

console.log(fruits);

// unshift() massivin evveline element elave edir

fruits.unshift("gilas");

console.log(fruits);

//  shift() massiving evvelinden element silir

fruits.shift();

console.log(fruits); */

// Davami - 26-11-23

const kom = ["Real", "Bayer", "PSG", "Roma"];

// reverse() massivin elementlerini tersine cevirir
kom.reverse();

console.log(kom);

// includes() massivde elementin olub-olmamasini yoxlayir

let yoxla = kom.includes("Bayer");

console.log(yoxla);

let yoxla2 = kom.includes("Milan");

console.log(yoxla2);

// indexOf elementin massivde indeks nomresini gosterir

const kom2 = ["Ajax", "Freiburg", "AEK", "Inter"];

let aekInd = kom2.indexOf("AEK");
console.log(aekInd);

kom2.reverse();
console.log(kom2);

console.log(kom2.indexOf("AEK"));

// eger element massivde yoxdurs, o zaman netice -1 olur

console.log(kom2.indexOf("Milan"));

// slice()

const olkeler = ["Almaniya", "Italiya", "Misir", "Braziliya"];

console.log(olkeler);

// slice() - massivin kopyasini duzeldir

const olkeKopya = olkeler.slice();

console.log(olkeKopya);

// slice(index) - index-den baslayib qalan elementleri kopyalayir
// ve yeni massiv yaradir

const olke3 = olkeler.slice(1);

console.log(olke3);

console.log(olkeler);

// slice(indexStart, indexEnd) - indexStart-dan indexEnd-e qeder
// (indexEnd daxil deyil) elementleri kopyalayir ve massive salir

const olkeAlItal = olkeler.slice(0, 2);

console.log(olkeAlItal);

const mobile = ["Samsung", "Apple", "Huawei", "Xiaomi", "Oneplus"];

const mobileAHX = mobile.slice(1, 4);

console.log(mobileAHX);

const mobileHXO = mobile.slice(2);

console.log(mobileHXO);

// splice()

const notbuk = ["HP", "DELL", "ASUS", "Mac", "Lenovo"];

// splice(index) - indeksden baslayib massivin elementlerini
// qoparir.

notbuk.splice(2);

console.log(notbuk);

const meyveler = ["alma", "heyva", "nar", "xurma", "limon"];

// Qoparilmis elementlerini ayri bir massive yigiriq

const nxl = meyveler.splice(2);

console.log(nxl);

console.log(meyveler);

// splice (index, say) - indeksden baslayib mueyyen sayi qoparib
// bir massive salir

const dersler = ["Tarix", "Kimya", "Fizika", "Idman", "Ingilis"];

const idm = dersler.splice(3, 1);

console.log(idm);

console.log(dersler);

const erzaq = ["un", "corek", "yag", "su", "konfet"];

const y = erzaq.splice(2, 1);

console.log(y);

const mebel = ["divan", "kreslo", "stol", "skaf", "stul"];

const ks = mebel.splice(1, 2);

console.log(ks);

console.log(mebel);

const ofisKans = ["kagiz", "qelem", "kalkulyator", "skrepka"];

const qk = ofisKans.slice(1, 3);

console.log(qk);

const qkSpl = ofisKans.splice(1, 2);

console.log(qkSpl);
