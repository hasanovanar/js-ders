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

if (bal >= 300) {
  console.log("Telebe imtahandan kecir");
} else {
  console.log("Telebe imtahandan kesildi");
}

const bal2 = 350;

if (bal2 >= 300) {
  console.log("Telebe imtahandan kecir");
} else {
  console.log("Telebe imtahandan kesildi");
}
