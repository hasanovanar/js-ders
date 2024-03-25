// Funksiyalar

// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");
// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");
// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");
// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");
// console.log("Hormetli qonaq, salam, otelimize xosh gelmisiniz");

// Funksiyanin yaradilmasi 2 merheleden ibaretdir
// 1-ci onu elan edirik
//2-ci onu cagiririq

//1-ci merhele - elan etmek - declaration
// moterizenin icinde hechne yoxdursa, bu parametrsiz funksiyadir
function salam() {
  // function body - burda kod yazilir
  console.log("Salam, hormetli qonaq,  otelimize xosh gelmisiniz!");
}

//2-ci merhele - cagirmaq - call, invocation
salam();
salam();

function shexsVesiqe() {
  console.log("Ad: Semed");
  console.log("Familiya: Veliyev");
  console.log("Unvan: Baki seh. A.Rajabli kuc, 38");
  console.log("Dogum tarixi: 12.03.1987");
}

shexsVesiqe();

shexsVesiqe();

// Moterizenin icinde deyisen yazanda buna parameter

function salamQonaq(qonaq) {
  console.log("Salam, hormetli qonaq");
}

salamQonaq();

// MEn ne isteyirem
// salamQonaq('Veli') ==> Salam, hormetli Veli
// salamQonaq('Ehmed') ==> Salam, hormetli Ehmed
// salamQonaq('Leyla') ==> Salam, hormetli Leyla

function salamVeli() {
  console.log("Salam, hormetli Veli.");
}

function salamEhmed() {
  console.log("Salam, hormetli Ehmed.");
}

function salamLeyla() {
  console.log("Salam, hormetli Leyla.");
}

salamVeli();

function salamQonaq(qonaq) {
  console.log(`Salam, hormetli ${qonaq}.`);
}

salamQonaq("Ehmed"); // funksiya cagirilanda moterizenin icine yazilana arqument deyilir

salamQonaq("Faiq");

salamQonaq("heyva");

function helloGuest(name) {
  console.log(`Hello, dear ${name}`);
}

helloGuest("John");
