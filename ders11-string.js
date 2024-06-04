// String ve emeliyyatlari

/*

const text = "hello";

const country = "Azerbaijan";

// String-de olan herflerin ayri-ayri cixarilmasi.

// indexing.

console.log(country[0]); // A

console.log(country[3]); // r

console.log("Turkiye"[4]); // i

// charAt(index) metod

console.log(country.charAt(3)); // r
console.log("Turkiye".charAt(4)); // i

// length = String-in uzunlugu = tekstde olan isharelerin sayi (boshluq daxildir)

const textW = "Hello World";
console.log(textW.length); // 11 (boshluq da daxildir)

// indexOf() metod - tekstde olan simvolun indeks nomresini gosterir.
// Eger eyni simvoldan bir necedirse, 1-cinin indeksini gosterir.

const amer = "United States of America";
const indext = amer.indexOf("t");
console.log(indext); // 1-ci t-nin indeksini gosterir

// lastIndexOf()  - tekstde eyni simvoldan bir necedirse, sonuncunun indeksini gosterir.
const indextEnd = amer.lastIndexOf("t");
console.log(indextEnd);

const indexSt = amer.indexOf("States"); // sozun baslangic indeksini gosterir
console.log(indexSt);

// slice() String-den mueyyen bir hissenin kesilmesi
// slice(startIndex)
// slice(startIndex, endIndex)

const countryName = "Azerbaijan Republic";

const rep = countryName.slice(11); // 11-ci indexksden bashlayib string-i kesir
console.log(rep); */

const edu = "Ministry of Education of Azerbaijan";

const countryN = edu.slice(25);
console.log(countryN);

const eduOrg = edu.slice(12, 21);
console.log(eduOrg); // Education

// 3-6-24
let indexStart = edu.indexOf("E");
console.log(indexStart); // 12

// Biz 2-ci indeksi yeni 21-i tapmaliyiq.

let indexEnd1 = edu.indexOf(" ");
console.log(indexEnd1); // 8 oldu bu yaramir

let indexEnd2 = edu.lastIndexOf(" of");
console.log(indexEnd2); //21

const educ = edu.slice(indexStart, indexEnd2);
console.log(educ);

// 21-i tapmagin 2-ci variani
let indexEnd3 = edu.indexOf("n ");
console.log(indexEnd3); // 20

const educ2 = edu.slice(indexStart, indexEnd3 + 1);
console.log(educ2);

// Menfi indeksler -1-den bash
let fruits = "apple, banana, kiwi";
let fruit3 = fruits.slice(-4);
console.log(fruit3); // kiwi

let fruit2 = fruits.slice(-12, -6);
console.log(fruit2); // banana

// substring() = slice(). Ferqi odur ki, substring() - de menfi indeksler ishlemir

let fruit1 = fruits.substring(0, 5);
console.log(fruit1);

// concat() - bu string-leri birleshdirir.

let text1 = "Hello";
let text2 = "World";
// Hello World yazmaq isteyirem.

// Evvelki yanashmalar

let combined = "Hello " + "World";
console.log(combined);

let combined2 = text1 + " " + text2;
console.log(combined2);

let combinedTemp = `${text1} ${text2}`;
console.log(combinedTemp);

let combinedConcat = text1.concat(text2);
console.log(combinedConcat); // bu zaman boshluq olmur, bu sehvdir

let combinedConcat2 = text1.concat(" ", text2);
console.log(combinedConcat2);

let str1 = "Ministry";
let str2 = "of";
let str3 = "Education";
// Ministry of Education

let minEdu = str1.concat(" ", str2, " ", str3);
console.log(minEdu);

let str5 = "Hello";
let str6 = "John";

let greet = str5.concat(", ", str6);
console.log(greet); // Hello, John

// trim() - bu stringin etrafinda boshluqlari goturur.

let text3 = "      Azerbaijan     Republic    ";
let textCor = text3.trim();
console.log(textCor);

// replace() - string-in mueyyen bir hissesini bashqa bir stringle evezleyir.
// Ancaq 1-ci rast gelineni deyishir.

const sentence1 = "Istanbul is capital of Turkey. Istanbul is a large city.";

const sentence1Rep = sentence1.replace("Istanbul", "Ankara");
console.log(sentence1Rep);

// replaceAll() = string-de butun rast gelinen hisseni bashqa bir stringle evezleyir.

const sentence1RepAll = sentence1.replaceAll("Istanbul", "Ankara");
console.log(sentence1RepAll);

const team = "Real Madrid is French team. French teams are strongest in Europe";
const teamR = team.replace("French", "Spanish");
console.log(teamR);

console.log(team);

// toLowerCase() - stringin butun isharelerini kicik yazir.
// toUpperCase() - stringin butun isharelerini boyuk yazir.

let str7 = "Hello";

let str7L = str7.toLowerCase();
console.log(str7L);

let str8 = "HARRY POTTER";
let str8L = str8.toLowerCase();
console.log(str8L);

let countryAz = "azerbaijan republic";
let countryAzU = countryAz.toUpperCase();
console.log(countryAzU);

// Azerbaijan Republic

// Sade varianti - azerbaijan ==> Azerbaijan
const countryaz = "azerbaijan";

const firstLetter = countryAz[0];
const firstLetterU = firstLetter.toUpperCase(); // A
const remaining = countryaz.slice(1);
console.log(remaining); // zerbaijan

const countryC = firstLetterU.concat(remaining);
console.log(countryC);
