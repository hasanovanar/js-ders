// Massiv - Array
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

console.log(fruits);
