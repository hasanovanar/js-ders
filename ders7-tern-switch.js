// 4-2-24
// Ternary operator if else-in diger yazilis formasidir.

const yash = 18;

if (yash >= 16) {
  console.log("Sene pasport dushur");
} else {
  console.log("Sene pasport dushmur");
}

yash >= 16 // shert - condition
  ? console.log("Sene pasport dushur") // shert dogru olsa
  : console.log("Sene pasport dushmur"); // shert dogru olmasa

const qiymet = 50000;

qiymet <= 45000 ? console.log("Mercedes aliram") : console.log("BMW aliram");

// Ternary operator yazilisi 1 if else sherti ucun

const imtahanBal = 150;

imtahanBal >= 200
  ? console.log("Sen musabiqeye kecirsen")
  : console.log("Sen musabiqeye dushmursen");

// SWITCH

const yer = 5;

if (yer === 1) {
  console.log("Mukafat 3000");
} else if (yer === 2) {
  console.log("Mukafat 2000");
} else if (yer === 3) {
  console.log("Mukafat 1000");
} else {
  console.log("Mukafat yoxdur");
}

switch (yer) {
  case 1:
    console.log("Mukafat 3000");
    break;
  case 2:
    console.log("Mukafat 2000");
    break;
  case 3:
    console.log("Mukafat 1000");
    break;
  default:
    console.log("Mukafat yoxdur");
}

const zer = Math.floor(Math.random() * 6) + 1;

console.log(`Atilan zer ${zer}`);

// if (zer === 6) {
//   console.log("Hediyye soyuducu");
// } else if (zer === 5) {
//   console.log("Hediyye paltaryuyan");
// } else if (zer === 4) {
//   console.log("Hediyye tozsoran");
// } else {
//   console.log("Hediyye dushmur");
// }

switch (zer) {
  case 6:
    console.log("Hediyye soyuducu");
    break;
  case 5:
    console.log("Hediyye paltaryuyan");
    break;
  case 4:
    console.log("Hediyye tozsoran");
    break;
  default:
    console.log("Hediyye dushmur");
}

// Fesil adlarini ingilis dilinden avtomatik Azerb diline tercume edirik.

const fesil = "sprung";

switch (fesil) {
  case "spring":
    console.log("yaz");
    break;
  case "summer":
    console.log("yay");
    break;
  case "autumn":
    console.log("payiz");
    break;
  case "winter":
    console.log("qish");
    break;
  default:
    console.log("Feslin adini dogru yazin");
}

// ay adlarini tercume edirik
const ay = "January";

switch (ay) {
  case "January":
    console.log("yanvar");
    break;
  case "February":
    console.log("fevral");
    break;
  case "March":
    console.log("mart");
    break;
  case "April":
    console.log("aprel");
    break;
  case "May":
    console.log("may");
    break;
  case "June":
    console.log("iyun");
    break;
  case "July":
    console.log("iyul");
    break;
  case "August":
    console.log("avqust");
    break;
}
