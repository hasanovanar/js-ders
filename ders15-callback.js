// Salary meselesi

// tax
// <= 2500 => (maas - 200) * 0.14
// >2500 => 2500 * 0.14 + (sal - 2500) * 0.25
// taxFree = 200
// taxRate1 = 0.14
// taxRate2 = 0.25
// cutoff = 2500

// DSMF socialInsurancce - 3faiz
// issizlik (unemployment) - 0.5 faiz
// icbari sig (medicalInsurance) - 2 faiz

// Temiz maas hesablayan funksiya yaz

// 1-ci metod

const netSalary = (grossSal) => {
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

  let socialInsurance = grossSal * 0.03;
  let unempPay = grossSal * 0.005;
  let medicalInsurance = grossSal * 0.02;

  let totalDeductions = tax + socialInsurance + unempPay + medicalInsurance;

  let netSalary = grossSal - totalDeductions;
  return netSalary;
};

let AhmedSal = netSalary(2000);

console.log(AhmedSal);

// Metod 2 - funksiyanin icinde funksiya

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

// const socialIns = (grossSal) => {
//   return grossSal * 0.03;
// };

const socialIns = (grossSal) => grossSal * 0.03;

// const unempPay2 = (grossSal) => {
//   return grossSal * 0.005;
// };

const unempPay2 = (grossSal) => grossSal * 0.005;

// const medicalIns2 = (grossSal) => {
//   return grossSal * 0.02;
// };

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

let AhmedSal2 = netSal2(2000);
console.log(AhmedSal2);

let AhmedSocialIns = socialIns(2000);

console.log(AhmedSocialIns);

// ######################## CALLBACK FUNCTIONS ####################################

// const abc = (a, callbackFn) = {} // Funksiyanin parametri funksiya olanda

const salArr = [2000, 3000, 4000]; // Ahmed, Mamed, Ayten

// socialInsSal
// const socialIns = (grossSal) => grossSal * 0.03;

const AhmedSocIns = socialIns(2000);
const MamedSocIns = socialIns(3000);
const AytenSocIns = socialIns(4000);

const socialInsArr = [socialIns(2000), socialIns(3000), socialIns(4000)];
const medicalInsArr = [medicalIns2(2000), medicalIns2(3000), medicalIns2(4000)];
console.log(socialInsArr);

// const socialIns = (grossSal)

let result = [];

// for (let e of salArr) {
//   result.push(e * 0.03);
// }

for (let e of salArr) {
  result.push(socialIns(e));
}

console.log(result);

// Funksiya sheklinde

const socialInsTest = (arr) => {
  let result = [];

  for (let e of arr) {
    result.push(socialIns(e));
  }
  return result;
};

const salArr2 = [1000, 1500, 2000, 2500, 3000]; // 1000*0.03 1500*0.03

const socialArr = socialInsTest(salArr2);

console.log(socialArr);

const medicalInsTest = (arr) => {
  let result = [];

  for (let e of arr) {
    result.push(medicalIns2(e));
  }
  return result;
};

const medicalInsArr2 = medicalInsTest(salArr2);
console.log(medicalInsArr2);

// Callback function - callback parametri funksiya olmalidir

const callBackFn = (arr, callback) => {
  let result = [];

  for (let e of arr) {
    result.push(callback(e));
  }
  return result;
};

const salArrBak = [2000, 2500, 3000, 3500, 4000, 4500, 5000];

const socialInsArrBak = callBackFn(salArrBak, socialIns);

console.log(socialInsArrBak);

const medicalInsArrBak = callBackFn(salArrBak, medicalIns2);
console.log(medicalInsArrBak);

const unempArrBak = callBackFn(salArrBak, unempPay2);
console.log(unempArrBak);

const taxArrBak = callBackFn(salArrBak, taxSal);
console.log(taxArrBak);

const netSalArrBak = callBackFn(salArrBak, netSal2);
console.log(netSalArrBak);

// Mesele arrayin butun elmementlerini 2-ye vur (callback istifade ederken)

// 1. Her bir elementi 2-ye vuran funksiya yazirsan

const double = (num) => num * 2;

console.log(double(3));

const numbersA = [20, 30, 15, 4];
/*
const callBackFn = (arr, callback) => {
    let result = [];
  
    for (let e of arr) {
      result.push(callback(e));
    }
    return result;
  };*/

const arrDouble = callBackFn(numbersA, double);
console.log(arrDouble);

const arrABC = [20, 50, 60, 30];

// Eger arr-in elementi 50-den kickdirse 2-ye vur, boyukdurse 3-e vur
// Funksiyani 1 eded ucun yaziram

const doubleThree = (a) => {
  if (a < 50) {
    return a * 2;
  } else {
    return a * 3;
  }
};

console.log(doubleThree(60));

const arrDoubleThree = callBackFn(arrABC, doubleThree);
console.log(arrDoubleThree);
