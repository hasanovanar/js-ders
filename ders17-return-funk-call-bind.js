// Bashqa funksiyani qaytaran (return eden) funksiyalar;
/*
const greet = () => {
  return function () {
    console.log("Hello");
  };
};

const hello = greet();
console.log(hello);
const helloCall = hello();
hello();
console.log(helloCall);

// 2-ci usul
greet()();

function greetName(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}

const hiThere = greetName("Hi there");
console.log(hiThere);
hiThere("John");

greetName("Hi there")("Mike");

// Praktiki istifade
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5));
console.log(multiply(2)(5));

const triple = multiply(3);
console.log(triple(5));
console.log(multiply(3)(5));

// 2-ci istifade hali
function createLogger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

infoLogger("This is info log");
errorLogger("This is error log");*/

// HIGHER-ORDER FUNCTIONS

// Javascriptde -
// Funksiyanin parametri callback olarsa
// Funksiya return funksiya ederse
// HIGHER-ORDER FUNCTIONS

//1 - multiply(a) - Higher Order funksiyasidir
//2- createLogger - Higher Order funksiyasidir
//3 - callbackObj - Higher Order
// 4 - callBackFn -Higher Order
/*
const callbackObj = (obj, callback) => {
  let newObj = {};
  for (let e in obj) {
    newObj[e] = callback(obj[e]);
  }
  return newObj;
};
/

const callBackFn = (arr, callback) => {
    let result = [];
  
    for (let e of arr) {
      result.push(callback(e));
    }
    return result;
    
  };*/
/*
const xyz = (a, bce) => {
    nnnfgnf
    bce()
  }*/

// Call-apply-bind
/*
const carKia = {
  make: "Kia",
  model: "Rio",
  autopark: function () {
    console.log("This car parks itself");
  },
};

carKia.autopark();*/

const carByd = {
  make: "BYD",
  model: "Tang",
};

// Call-apply-bind - istifade usullarindan
// Funksiyani-metodu icareye goturmekdir

// Borca goturmeyin 2 usulu var.

// 1-ci usul - hazir funksiyani obyektde ishletmek

function autopark2() {
  console.log("This car parks itself");
}

autopark2.call(carByd);
autopark2.apply(carByd);

const carBydPark = autopark2.bind(carByd);
carBydPark();
carBydPark();

// Call ve apply-in ferqi parametrde olur.
function autopark3(time) {
  console.log(`This car parks itself in ${time} minutes`);
}

autopark3(7);

autopark3.call(carByd, 5);
autopark3.apply(carByd, [6]);

const carBydParkT = autopark3.bind(carByd, 4);
carBydParkT();

// 2-ci usul, diger obyektin metodundan istifade etmek - icareye goturmek

const carKia = {
  make: "Kia",
  model: "Rio",
  autopark: function () {
    console.log("This car parks itself");
  },
};

const carHyundai = {
  make: "Hyundai",
  model: "Tucson",
};

const carHyAutopark = carKia.autopark;
carHyAutopark.call(carHyundai);
carHyAutopark.apply(carHyundai);

const carHyBind = carHyAutopark.bind(carHyundai);
carHyBind();

carKia.autopark = function (time) {
  console.log(`This car parks itself in ${time} minutes`);
};

const carHyAutoparkT = carKia.autopark;
carHyAutoparkT.call(carHyundai, 3);
carHyAutoparkT.apply(carHyundai, [3]);

const carHyBindT = carHyAutoparkT.bind(carHyundai, 3);
carHyBindT();

// Obyektin istifadesinin birbasha

carKia.autopark.call(carHyundai, 8);
carKia.autopark.apply(carHyundai, [7]);

const carHyBindTTT = carKia.autopark.bind(carHyundai, 2);
carHyBindTTT();

// Call-bind-apply-in 2-ci istifadesi this-i menimsedir.

const carHonda = {
  make: "Honda",
  model: "Civic",
  selfDrive: function () {
    console.log(`${this.make} ${this.model} can drive itself`);
  },
};

carHonda.selfDrive();

const carToyota = {
  make: "Toyota",
  model: "Corolla",
  selfDrive() {
    console.log(`${this.make} ${this.model} can drive itself`);
  },
};
carToyota.selfDrive();

const carBmw = {
  make: "BMW",
  model: "Z3",
};

function newDrive() {
  console.log("This technology enables car to drive itself");
}

function newDrive2() {
  console.log(`${this.make} ${this.model} can drive itself`);
}

newDrive2();

// 1-ci metod
newDrive2.call(carBmw);
newDrive2.apply(carBmw);
const carDrive = newDrive2.bind(carBmw);
carDrive();

// parametrle
function newDrive3(company, year) {
  console.log(
    `${this.make} ${this.model} can drive itself using technology by ${company} made in ${year}`
  );
}

newDrive3.call(carBmw, "AI-Drive", 2023);
newDrive3.apply(carBmw, ["AI-Drive", 2023]);

const carDrive3 = newDrive3.bind(carBmw, "AI-Driver", 2022);
carDrive3();

// Basqa firmanin metodunu borc goturmek

const carLexus = {
  make: "Lexus",
  model: "LX570",
};

const selfDrive2 = carToyota.selfDrive;
console.log(selfDrive2);

selfDrive2.call(carLexus);
selfDrive2.apply(carLexus);
const lexusDrive = selfDrive2.bind(carLexus);
lexusDrive();

// Digerine oxshar funksiya elaveet
carToyota.selfNewDrive = function (company, year) {
  console.log(
    `${this.make} ${this.model} can drive itself using technology by ${company} made in ${year}`
  );
};

console.log(carToyota);

carToyota.selfNewDrive("Toyota", 2022);

const selfNewDrive2 = carToyota.selfNewDrive;
selfNewDrive2.call(carLexus, "Toyota", 2022);
selfNewDrive2.apply(carLexus, ["Toyota", 2022]);

const lexusDriveNew = selfNewDrive2.bind(carLexus, "Toyota", 2022);
lexusDriveNew();
