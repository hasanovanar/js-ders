console.log(5 > 4); // true

console.log(3 < 6); // true

console.log(6 > 10); // false

console.log(10 >= 10); // true

console.log(9 <= 9); // true

console.log(8 >= 9); //false

console.log(9 <= 3); //false

console.log(5 > "4"); //true

console.log(3 < "6"); // true

console.log(4 <= "4"); // true

// = mənimsəmə işarəsidir const a=5 let b = 4

console.log(5 == 5); // true

console.log(5 == "5"); //true

console.log(5 === "5"); //false

console.log(5 === 5); //true

console.log("5" === "5"); //true

let a = 5; // bu beraber deyil, menimsemdir

// console.log(5 = 5); // sintaksis xetadir - error

console.log("alma" === "alma"); //true

console.log(5 === 6); //false

console.log(5 == 6); // false

console.log(8 == "8"); // true

console.log(8 != "8"); // "!=" "=="-nun eksidir, ona gore false-dur

console.log(8 === "8"); //false

console.log(8 !== "8"); // "!==" "===" -nun eksidir, ona gore bu true

console.log(4 != 4); // false

// console.log(4 == 4);

console.log(7 !== 7); // false

// console.log(7 === 7);

let abc = 4;

console.log(abc <= 6); //true

console.log(abc == "4"); //true

console.log(abc === "4"); // false

console.log(abc === 4); //true

let def = "4";

console.log(abc <= def); //true

console.log(abc === def); //false

console.log(abc == def); //true

let ghk = 8;

console.log(def != ghk); // true

// console.log(def == ghk);

console.log(def !== ghk); //true

// Muqayise ve menimseme operatorlarinin ustunluyu

let lmo = 5 > 3; // let lmo = true ==> ustunluk muqayisededir
console.log(lmo);

let otp = 4 <= 2; // let otp = false
console.log(otp);

let mnk = 8 == 8; // let mnk = true
console.log(mnk); // true

console.log(mnk == 15); // false

// console.log (let mnk == 15) // xeta verecek

const klm = 7 === "7"; // const klm = false
console.log(klm);

const pqr = 6 != 6; //  const pqr = false
console.log(pqr);

const stu = 7 !== "7"; // const stu = true
console.log(stu);

// Iki deyisene eyni qiymet verilmesi

let x = (y = 15); // x = 15, y = 15

console.log(x);

console.log(y);
