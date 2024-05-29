// String ve emeliyyatlari

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
console.log(rep);

const edu = "Ministry of Education of Azerbaijan";

const countryN = edu.slice(25);
console.log(countryN);

const eduOrg = edu.slice(12, 21);
console.log(eduOrg); // Education
