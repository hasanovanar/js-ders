// Objects = reference type
/*
const car = {
    brand: "Porsche", // key-value pairs
  }; // Object literal usulu
  
  console.log(car);
  
  const carPorsche = {
    brand: "Porsche",
    model: "Panamera",
    year: 2018,
    price: 80000,
    color: "black",
  };
  
  console.log(carPorsche);
  
  // model: 'Panamera' ==> model - property
  
  const home = {
    region: "Yasamal",
    floor: 5,
    price: 150000,
    "has Kupca": true,
  };
  
  console.log(home);
  
  // Property-ye baxmagin 2 usulu var
  // dot notation, bracket notation
  
  console.log(home.region);
  
  console.log(home.price);
  
  const homeFloor = home.floor;
  console.log(homeFloor);
  
  console.log(home["region"]);
  
  console.log(home["price"]);
  
  const person = {
    firstName: "Samed",
    lastName: "Veliyev",
    birthYear: 1987,
    isMarried: true,
  };
  
  // Object property-lereinin deyismesi
  person.isMarried = false;
  
  console.log(person);
  
  person.address = "Baku, Ahmedli 35";
  
  console.log(person);
  
  delete person.address;
  console.log(person);
  
  person.hasChildren = true;
  
  console.log(person); */

// 15-4-24

const student1 = {
  name: "Samed",
  age: 2024 - 2002,
  university: "BDU",
  faculty: "IT",
};

console.log(student1);

const student2 = {
  name: "Firuze",
  age: 20,
  university: "ADA",
  faculty: "Economy",
  exam: ["English", "Accounting", "Finance"],
};

student1.exam = ["Math", "Programming", "Networking"];

console.log(student1);

console.log(student2.exam);

console.log(student2.exam[1]);

let networkExam = student1.exam[2];

console.log(networkExam);

console.log(student2.age);

student2.age = student2.age + 1;

console.log(student2.age);

student2.age++; // ++ = 1 artir;  -- 1 azalt ? yoxlama

console.log(student2.age);

student2.age--;

console.log(student2.age);

// nested objects - property kimi obyektin ozu

const student3 = {
  name: "Kamran",
  age: 19,
  university: "UNEC",
  faculty: "MBA",
  exam: ["Sociology", "Economics", "Management"],
  foreignLang: {
    English: "excellent",
    French: "good",
  },
};

console.log(student3);

console.log(student3.foreignLang);

console.log(student3.foreignLang.French);

student3.foreignLang.French = "upper-intermediate";

console.log(student3.foreignLang.French);

// Obyektleri switch-in bezi meselelrini yungullesdirmek ucun istifade etmek olar
const season = "spring";

switch (season) {
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

const seasonObj = {
  spring: "yaz",
  summer: "yay",
  autumn: "payiz",
  winter: "qis",
};

// Obyektlerin metodlari
// Eger obyektin property-si funksiyadirsa, ona metod deyirler

const robot1 = {
  name: "Kojo",
  company: "Honda",
  introduce: function () {
    console.log("Hello, my name is Kojo");
  },
};

robot1.introduce; // bu hech ne etmeyecek

console.log(robot1.introduce);

robot1.introduce();

robot1.walk = function () {
  console.log("I start walking");
};

console.log(robot1);

robot1.walk();

robot1.stop = function () {
  console.log("I stopped");
};

robot1.stop();

robot1.take = function (thing) {
  console.log(`I take ${thing}`);
};

robot1.take("pen");

robot1.findSum = function (num1, num2) {
  return num1 + num2;
};

let sum34 = robot1.findSum(3, 4);

console.log(sum34);

// this

// const robot2 = {
//     name: "Sofia",
//     company: "Xiaomi",
//     introduce: function () {
//       console.log("Hello, my name is Sofia");
//     },
//   };

const robot2 = {
  name: "Sofia",
  company: "Xiaomi",
  introduce: function () {
    console.log(`Hello, my name is ${name} `);
  },
};

robot2.introduce();

const robot3 = {
  name: "Bob",
  company: "Tesla",
  introduce: function (robName) {
    console.log(`Hello, my name is ${robName} `);
  },
}; // Bu metod mentiqi olaraq yanlisdir

robot3.introduce("Bob");
robot3.introduce("Ahmed");
console.log(robot3.name);

//Duzgun yanasma
const robot4 = {
  name: "Bob",
  company: "Tesla",
  introduce: function () {
    console.log(`Hello, my name is ${this.name} `);
  },
};

robot4.introduce(); // this= robot4 - funksiyanin cagiranda dayanan robot4

robot4.sayCompanyName = function () {
  console.log(`My company is ${this.company}`); // this literalin icinde olmalidir
};

robot4.sayCompanyName();

const robot5 = {
  name: "Mary",
  company: "Apple",
  introduce: function () {
    console.log(`Hello, my name is ${robot5.name} `);
  },
};

robot5.introduce();

const robot6 = {
  name: "Hiko",
  company: "Samsung",
  introduce: function () {
    console.log(`Hello, my name is ${robot6.name} `);
  },
};

robot6.introduce();

const robot7 = {
  name: "Alper",
  company: "Beko",
  introduce: function () {
    console.log(`Hello, my name is ${this.name} `);
  },
};

robot7.introduce();
