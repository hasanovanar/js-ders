const taxSal = (grossSal) => {
  const taxFree = 200;
  const taxRate1 = 0.14;
  const taxRate2 = 0.25;
  const cutoff = 2500;
  let tax;
  if (grossSal <= cutoff) {
    tax = (grossSal - taxFree) * taxRate1;
  } else {
    tax = cutoff * taxRate1 + (grossSal - cutoff) * taxRate2;
  }

  return tax;
};

const socialIns = (grossSal) => grossSal * 0.03;

const unempPay2 = (grossSal) => grossSal * 0.005;

const medicalIns2 = (grossSal) => grossSal * 0.02;

const netSal2 = (grossSal) => {
  let taxSalary = taxSal(grossSal);
  let socialInsSal = socialIns(grossSal);
  let unempPay = unempPay2(grossSal);
  let medicalIns = medicalIns2(grossSal);

  let totalDed = taxSalary + socialInsSal + unempPay + medicalIns;

  let netSalary = grossSal - totalDed;
  return netSalary;
};

// Obyektlerde callback istifade olunmasi

const employeeSals = {
  Hasan: 3500, // employeeSals['Hasan']
  John: 3000, // employeeSals['John']
  Veli: 2500, // employeeSals['Veli']
};

// Bu obyektde olan iscilerin medical ins-ni hesablamaq lazimdir.

// Neyi almaq isteyirem
/*
const medicalInsEmp = {
    Hasan: 3500 * 0.02,
    John: 3000 * 0.02,
    Veli: 2500 * 0.02,
  };*/

/*
const medicalInsEmp = {
    Hasan: medicalIns2(3500),
    John: medicalIns2(3000),
    Veli: medicalIns2(2500),
  };

  */

// 1. Hele ki funk yazmiriq
// 2. Bosh obyekt elan edib ve onu doldururuq.

let capitals = {};
capitals["Germany"] = "Berlin";
console.log(capitals);
capitals["France"] = "Paris";
console.log(capitals);

let newObj2 = {};
newObj2["Hasan"] = medicalIns2(3500);
newObj2["John"] = medicalIns2(3000);
newObj2["Veli"] = medicalIns2(2500);
console.log(newObj2);

let newObj = {};

for (let e in employeeSals) {
  newObj[e] = medicalIns2(employeeSals[e]);
}

console.log(newObj);

let newObj3 = {};

for (let e in employeeSals) {
  newObj3[e] = socialIns(employeeSals[e]);
}

console.log(newObj3);

const callbackObj = (obj, callback) => {
  let newObj = {};
  for (let e in obj) {
    newObj[e] = callback(obj[e]);
  }
  return newObj;
};

let medicalInsEmp = callbackObj(employeeSals, medicalIns2);
console.log(medicalInsEmp);

let netSalEmp = callbackObj(employeeSals, netSal2);
console.log(netSalEmp);

const emplSales = {
  Hasan: 14000,
  Firuze: 18000,
  Selim: 9500,
};

// <=10000 1%, 10001-15000 2%, >15000 3%

const bonus = (sales) => {
  let bon;
  if (sales <= 10000) {
    bon = sales * 0.01;
  } else if (sales <= 15000) {
    bon = sales * 0.02;
  } else {
    bon = sales * 0.03;
  }
  return bon;
};

let bonObj = callbackObj(emplSales, bonus);
console.log(bonObj);

// Bashqa funksiyani qaytaran (return eden) funksiyalar;

const greet = () => {
  return function () {
    console.log("Hello");
  };
};

const hello = greet();
console.log(hello);
const helloCall = hello();
console.log(helloCall);
greet()();
